"use client"

import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
import { Plus } from "lucide-react"
import PotCard from "../components/pots/PotCard"
import AddPotModal from "../components/pots/AddPotModal"
import AddMoneyModal from "../components/pots/AddMoneyModal"
import WithdrawMoneyModal from "../components/pots/WithdrawMoneyModal"
import DeletePotModal from "../components/pots/DeletePotModal"

interface Pot {
  name: string
  target: number
  total: number
  theme: string
}

interface FinanceData {
  pots: Pot[]
}

export default function PotsPage() {
  const [data, setData] = useState<FinanceData | null>(null)

  const [isAddPotOpen, setIsAddPotOpen] = useState(false)
  const [isAddMoneyOpen, setIsAddMoneyOpen] = useState(false)
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedPot, setSelectedPot] = useState<Pot | null>(null)

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  const calculateProgress = (total: number, target: number) =>
    Math.min((total / target) * 100, 100)

  const handleAddPot = (name: string, target: number, theme: string) => {
    setData((prev) =>
      prev
        ? { pots: [...prev.pots, { name, target, total: 0, theme }] }
        : { pots: [{ name, target, total: 0, theme }] }
    )
  }

  const handleAddMoney = (amount: number) => {
    if (!selectedPot) return
    setData((prev) =>
      prev
        ? {
            pots: prev.pots.map((p) =>
              p.name === selectedPot.name ? { ...p, total: p.total + amount } : p
            ),
          }
        : null
    )
  }

  const handleWithdraw = (amount: number) => {
    if (!selectedPot) return
    setData((prev) =>
      prev
        ? {
            pots: prev.pots.map((p) =>
              p.name === selectedPot.name
                ? { ...p, total: Math.max(p.total - amount, 0) }
                : p
            ),
          }
        : null
    )
  }

  const handleDeletePot = () => {
    if (!selectedPot) return
    setData((prev) =>
      prev ? { pots: prev.pots.filter((p) => p.name !== selectedPot.name) } : null
    )
    setIsDeleteOpen(false)
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-[#F8F4F0] flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F4F0] flex">
      <div className="hidden lg:block sticky top-0 h-screen">
        <Sidebar />
      </div>
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-black">Pots</h1>
            <button
              onClick={() => setIsAddPotOpen(true)}
              className="flex items-center px-4 py-2 rounded-md bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Pot
            </button>
          </div>

          {data.pots.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 rounded-lg shadow">
              <p className="text-xl font-semibold text-gray-800 mb-2">
                You don’t have any pots
              </p>
              <p className="text-gray-600 mb-6">Start by creating your first savings pot.</p>
              <button
                onClick={() => setIsAddPotOpen(true)}
                className="px-4 py-2 rounded-md bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium"
              >
                <Plus className="h-4 w-4 mr-2 inline" />
                Create Pot
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.pots.map((pot, index) => {
                const progress = calculateProgress(pot.total, pot.target)
                const progressPercentage = (pot.total / pot.target) * 100

                return (
                  <PotCard
                    key={index}
                    name={pot.name}
                    target={pot.target}
                    total={pot.total}
                    theme={pot.theme}
                    progress={progress}
                    progressPercentage={progressPercentage}
                    onAddMoney={() => {
                      setSelectedPot(pot)
                      setIsAddMoneyOpen(true)
                    }}
                    onWithdraw={() => {
                      setSelectedPot(pot)
                      setIsWithdrawOpen(true)
                    }}
                    onDelete={() => {
                      setSelectedPot(pot)
                      setIsDeleteOpen(true)
                    }}
                  />
                )
              })}
            </div>
          )}
        </div>
        <Footer />
      </main>

      {/* Modals */}
      <AddPotModal
        isOpen={isAddPotOpen}
        onClose={() => setIsAddPotOpen(false)}
        onAdd={handleAddPot}
      />
      <AddMoneyModal
        isOpen={isAddMoneyOpen}
        onClose={() => setIsAddMoneyOpen(false)}
        potName={selectedPot?.name || ""}
        onAddMoney={handleAddMoney}
      />
      <WithdrawMoneyModal
        isOpen={isWithdrawOpen}
        onClose={() => setIsWithdrawOpen(false)}
        potName={selectedPot?.name || ""}
        onWithdraw={handleWithdraw}
      />
      <DeletePotModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        potName={selectedPot?.name || ""}
        onConfirm={handleDeletePot}
      />
    </div>
  )
}
