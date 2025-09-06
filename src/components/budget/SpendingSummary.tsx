interface SpendingSummaryProps {
  budgetData: {
    category: string
    theme: string
    spent: number
    maximum: number
  }[]
}

const SpendingSummary = ({ budgetData }: SpendingSummaryProps) => {
  return (
    <div className="space-y-4 mt-6">
      <h3 className="font-semibold text-lg">Spending Summary</h3>
      {budgetData.map((budget, index) => (
        <div
          key={budget.category}
          className={`flex items-center justify-between pb-3 ${
            index !== budgetData.length - 1 ? "border-b border-gray-300" : ""
          }`} >
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 rounded-full" style={{ backgroundColor: budget.theme }} />
            <span className="text-sm font-medium">{budget.category}</span>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">${budget.spent.toFixed(2)} <span className="text-xs text-gray-500">of ${budget.maximum.toFixed(2)}</span></p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SpendingSummary
