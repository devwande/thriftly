interface Transaction {
  avatar: string
  name: string
  date: string
  amount: number
}

interface LatestTransactionsProps {
  transactions: Transaction[]
  formatDate: (date: string) => string
}

const LatestTransactions = ({ transactions, formatDate }: LatestTransactionsProps) => {
  return (
    <div className="space-y-3">
      {transactions.map((transaction, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
              <img src={transaction.avatar} alt={transaction.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium">{transaction.name}</p>
              <p className="text-xs text-gray-500">{formatDate(transaction.date)}</p>
            </div>
          </div>
          <p className="text-sm font-semibold text-red-600">-${Math.abs(transaction.amount).toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}

export default LatestTransactions
