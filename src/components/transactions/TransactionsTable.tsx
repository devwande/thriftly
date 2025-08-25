interface Transaction {
  avatar: string
  name: string
  category: string
  date: string
  amount: number
}

interface TransactionsTableProps {
  transactions: Transaction[]
  formatDate: (d: string) => string
}

const TransactionsTable = ({ transactions, formatDate }: TransactionsTableProps) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg">
      <table className="w-full">
        <thead className="border-b">
          <tr>
            <th className="text-left py-4 px-6 font-medium text-gray-500">Recipient / Sender</th>
            <th className="text-left py-4 px-6 font-medium text-gray-500">Category</th>
            <th className="text-left py-4 px-6 font-medium text-gray-500">Transaction Date</th>
            <th className="text-right py-4 px-6 font-medium text-gray-500">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {transactions.map((transaction, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={transaction.avatar}
                      alt={transaction.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium text-gray-900">
                    {transaction.name}
                  </span>
                </div>
              </td>
              <td className="py-4 px-6 text-gray-500">{transaction.category}</td>
              <td className="py-4 px-6 text-gray-500">{formatDate(transaction.date)}</td>
              <td className="py-4 px-6 text-right">
                <span
                  className={`font-semibold ${
                    transaction.amount > 0 ? "text-green-600" : "text-black"
                  }`}
                >
                  {transaction.amount > 0 ? "+" : "-"}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionsTable
