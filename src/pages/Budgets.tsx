"use client"

import { useState, useEffect, useMemo } from "react"
import Sidebar from "../components/Sidebar"
import { Plus } from "lucide-react"
import SpendingChart from "../components/budget/SpendingChart"
import SpendingSummary from "../components/budget/SpendingSummary"
import BudgetCategoryCard from "../components/budget/BudgetCategoryCard"

interface Transaction {
  avatar: string
  name: string
  category: string
  date: string
  amount: number
  recurring: boolean
}

interface Budget {
  category: string
  maximum: number
  theme: string
}

interface FinanceData {
  transactions: Transaction[]
  budgets: Budget[]
}

const Budget = () => {
  const [data, setData] = useState<FinanceData | null>(null)

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  const budgetData = useMemo(() => {
    if (!data) return []

    return data.budgets.map((budget) => {
      const categoryTransactions = data.transactions.filter(
        (t) => t.category === budget.category && t.amount < 0
      )

      const spent = categoryTransactions.reduce((sum, t) => sum + Math.abs(t.amount), 0)
      const remaining = Math.max(budget.maximum - spent, 0)
      const percentage = (spent / budget.maximum) * 100
      const isOverBudget = spent > budget.maximum

      const latestTransactions = categoryTransactions
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3)

      return {
        ...budget,
        spent,
        remaining,
        percentage: Math.min(percentage, 100),
        isOverBudget,
        latestTransactions,
      }
    })
  }, [data])

  const totalSpent = budgetData.reduce((sum, budget) => sum + budget.spent, 0)
  const totalBudget = budgetData.reduce((sum, budget) => sum + budget.maximum, 0)
  const totalRemaining = Math.max(totalBudget - totalSpent, 0)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  const chartData = budgetData.map((budget) => ({
    name: budget.category,
    amount: budget.spent,
    color: budget.theme,
  }))

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Budgets</h1>
            <button className="flex items-center px-4 py-2 rounded-md bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium">
              <Plus className="h-4 w-4 mr-2" />
              Add New Budget
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6">
                <SpendingChart chartData={chartData} totalRemaining={totalRemaining} totalBudget={totalBudget} />
                <SpendingSummary budgetData={budgetData} />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {budgetData.map((budget) => (
                <BudgetCategoryCard key={budget.category} {...budget} formatDate={formatDate} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Budget
