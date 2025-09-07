import { useState } from "react"
import { MoreHorizontal } from "lucide-react"
import PotProgressBar from "./PotProgressBar"
import PotActions from "./PotActions"

interface PotCardProps {
  name: string
  target: number
  total: number
  theme: string
  progress: number
  progressPercentage: number
  onAddMoney: () => void
  onWithdraw: () => void
  onDelete: () => void
}

const PotCard = ({
  name,
  target,
  total,
  theme,
  progress,
  progressPercentage,
  onAddMoney,
  onWithdraw,
  onDelete,
}: PotCardProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme }} />
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        </div>
        <div className="relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <MoreHorizontal className="h-4 w-4 text-gray-600" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white border rounded-md shadow-md z-10">
              <button
                onClick={() => {
                  setMenuOpen(false)
                  onDelete()
                }}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2">Total Saved</p>
        <p className="text-3xl font-bold text-gray-900 mb-4">${total.toFixed(2)}</p>

        <PotProgressBar progress={progress} theme={theme} />

        <div className="flex justify-between items-center text-sm">
          <span className="font-medium text-gray-900">{progressPercentage.toFixed(1)}%</span>
          <span className="text-gray-600">Target of ${target.toFixed(2)}</span>
        </div>
      </div>

      <PotActions onAddMoney={onAddMoney} onWithdraw={onWithdraw} />
    </div>
  )
}

export default PotCard
