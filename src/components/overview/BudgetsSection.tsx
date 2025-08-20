"use client"

import React, { useState, useEffect } from "react"
import { PieChart, Pie, Cell } from "recharts"

interface FinanceData {
  transactions: Array<{
    category: string
    amount: number
  }>
  budgets: Array<{
    category: string
    maximum: number
    theme: string
  }>
}

export const BudgetsSection: React.FC = () => {
  const [data, setData] = useState<FinanceData | null>(null)

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  if (!data) {
    return (
      <div className="bg-white p-6 rounded-lg flex items-center justify-center">
        <p className="text-gray-600">Loading Budgets...</p>
      </div>
    )
  }

  const calculateSpending = () => {
    const spending: { [key: string]: number } = {}
    data.transactions.forEach((transaction) => {
      if (transaction.amount < 0) {
        const category = transaction.category
        spending[category] = (spending[category] || 0) + Math.abs(transaction.amount)
      }
    })
    return spending
  }

  const spending = calculateSpending()

  const totalLimit = data.budgets.reduce((sum, b) => sum + b.maximum, 0)
  const totalSpent = data.budgets.reduce((sum, b) => sum + (spending[b.category] || 0), 0)
  const totalRemaining = totalLimit - totalSpent
  const chartData = data.budgets.map((budget) => ({
    label: budget.category,
    amount: spending[budget.category] || 0,
    color: budget.theme,
    maximum: budget.maximum,
  }))

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Budgets</h2>
        <a className="text-gray-500 hover:text-gray-700 flex items-center text-sm" href="/budgets">
          See Details
          <img
            src={"src/assets/icons/ArrowRight.svg"}
            alt="right-arrow"
            className="ml-3"
          />
        </a>
      </div>

      <div className="flex items-center space-x-8">
        {/* Pie Chart */}
        <div className="flex justify-center relative w-64 h-64 items-center">
          <PieChart width={280} height={280}>
            <Pie
              data={chartData}
              dataKey="amount"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              startAngle={90}
              endAngle={450}
            >
              {chartData.map((item, index) => (
                <Cell key={`cell-${index}`} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-bold">${totalRemaining.toFixed(0)}</div>
            <div className="text-sm text-gray-500">of ${totalLimit} limit</div>
          </div>
        </div>

        <div className="space-y-3">
          {chartData.map((item) => (
            <div key={item.label} className="flex items-center">
              <div className="flex items-center space-x-2">
                <div
                  className="w-1 h-11 mr-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
              <div className="space-y-1">
                <div className="text-gray-500">{item.label}</div>
                <div className="text-sm font-semibold">
                  ${item.maximum.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
