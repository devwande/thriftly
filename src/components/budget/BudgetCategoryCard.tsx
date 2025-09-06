import { MoreHorizontal } from "lucide-react"
import LatestTransactions from "./LatestTransactions"

interface BudgetCategoryCardProps {
  category: string
  theme: string
  maximum: number
  spent: number
  remaining: number
  percentage: number
  isOverBudget: boolean
  latestTransactions: {
    avatar: string
    name: string
    date: string
    amount: number
  }[]
  formatDate: (date: string) => string
}

const BudgetCategoryCard = ({
  category,
  theme,
  maximum,
  spent,
  remaining,
  percentage,
  isOverBudget,
  latestTransactions,
  formatDate,
}: BudgetCategoryCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme }} />
          <h3 className="text-xl font-semibold">{category}</h3>
        </div>
        <button className="p-2 rounded-md hover:bg-gray-100">
          <MoreHorizontal className="h-4 w-4 text-gray-600" />
        </button>
      </div>

      <p className="text-sm text-gray-600 mb-4">Maximum of ${maximum.toFixed(2)}</p>

      <div className="mb-6">
        <div className="w-full bg-[#F8F4F0] rounded-md h-8 mb-3 flex items-center">
            <div
                className="h-6 mx-1 rounded-md"
                style={{
                width: `${Math.min(percentage, 100)}%`,
                backgroundColor: theme,
                }}
            ></div>
        </div>
        <div className="flex justify-around text-sm">
          <div className="flex items-center gap-4">
            <div className="w-1 h-9 rounded-full" style={{ backgroundColor: theme }} />
            <div>
                <p className="font-medium">Spent</p>
                <p className="text-gray-600">${spent.toFixed(2)}</p>
            </div>
          </div>

          <div className="text-right">
            <div className="flex items-center gap-4">
                <div className="w-1 h-9 rounded-full bg-[#F8F4F0]"/>
                <div>
                    <p className="font-medium">Remaining</p>
                    <p className={isOverBudget ? "text-red-600" : "text-gray-600"}>
                      {isOverBudget ? "-" : ""}${Math.abs(remaining).toFixed(2)}
                    </p>
                </div>
            </div>
           </div>
        </div>
      </div>

      <div className="p-4 bg-[#F8F4F0] rounded-md">
        <div className="flex items-center justify-between mb-4 ">
          <h4 className="font-medium">Latest Spending</h4>
          <button className="text-sm text-gray-600 hover:underline">See All →</button>
        </div>
        <LatestTransactions transactions={latestTransactions} formatDate={formatDate} />
      </div>
    </div>
  )
}

export default BudgetCategoryCard
