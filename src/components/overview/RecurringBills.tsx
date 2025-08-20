import React, { useEffect, useState } from "react"

interface Transaction {
  avatar: string
  name: string
  category: string
  date: string
  amount: number
  recurring: boolean
}

interface FinanceData {
  transactions: Transaction[]
}

export const RecurringBills: React.FC = () => {
  const [data, setData] = useState<FinanceData | null>(null)

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json: FinanceData) => setData(json))
      .catch(console.error)
  }, [])

  if (!data) {
    return (
      <div className="bg-white p-6 rounded-lg flex justify-center items-center">
        <p>Loading...</p>
      </div>
    )
  }

  // 🔹 Extract recurring bills from transactions
  const recurringBills = data.transactions.filter((t) => t.recurring && t.amount < 0)

  // Total of all recurring bills
  const totalRecurringBills = recurringBills.reduce((sum, bill) => sum + Math.abs(bill.amount), 0)

  // Bills already paid this month
  const paidBills = recurringBills.filter((bill) => {
    const billDate = new Date(bill.date)
    const currentMonth = new Date().getMonth()
    const currentYear = new Date().getFullYear()
    return billDate.getMonth() === currentMonth && billDate.getFullYear() === currentYear
  })
  const totalPaidBills = paidBills.reduce((sum, bill) => sum + Math.abs(bill.amount), 0)

  // Upcoming bills = total - paid
  const upcomingBills = totalRecurringBills - totalPaidBills

  // Bills due within the next 7 days
  const dueSoon = recurringBills.filter((bill) => {
    const billDate = new Date(bill.date)
    const today = new Date()
    const daysDiff = Math.ceil((billDate.getTime() - today.getTime()) / (1000 * 3600 * 24))
    return daysDiff <= 7 && daysDiff >= 0
  })
  const totalDueSoon = dueSoon.reduce((sum, bill) => sum + Math.abs(bill.amount), 0)

  // Build categories dynamically
  const billCategories = [
    { label: "Paid Bills", amount: totalPaidBills.toFixed(2), color: "#277C78" },
    { label: "Total Upcoming", amount: upcomingBills.toFixed(2), color: "#F2CDAC" },
    { label: "Due Soon", amount: totalDueSoon.toFixed(2), color: "#82C9D7" },
  ]

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Recurring Bills</h2>
        <a href="/bills" className="text-gray-500 hover:text-gray-700 flex items-center text-sm">
          See Details
          <img src={"/assets/icons/ArrowRight.svg"} alt="right-arrow" className="ml-3" />
        </a>
      </div>

      <div className="space-y-3">
        {billCategories.map((category) => (
          <div
            key={category.label}
            className="flex items-center justify-between bg-[#F8F4F0] rounded-r-lg "
          >
            <div className="flex items-center space-x-2">
              <div
                style={{ backgroundColor: category.color }}
                className="w-1 h-[56px] py-0"
              />
              <span className="py-4 text-gray-500 px-2">{category.label}</span>
            </div>
            <span className="font-medium px-2">${category.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
