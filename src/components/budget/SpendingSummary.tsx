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
      {budgetData.map((budget) => (
        <div key={budget.category} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: budget.theme }} />
            <span className="text-sm font-medium">{budget.category}</span>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">${budget.spent.toFixed(2)}</p>
            <p className="text-xs text-gray-500">of ${budget.maximum.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SpendingSummary
