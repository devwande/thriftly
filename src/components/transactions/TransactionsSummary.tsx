interface TransactionsSummaryProps {
  startIndex: number
  itemsPerPage: number
  total: number
}

const TransactionsSummary = ({ startIndex, itemsPerPage, total }: TransactionsSummaryProps) => {
  return (
    <div className="mt-4 text-sm text-gray-600">
      Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, total)} of {total} transactions
    </div>
  )
}

export default TransactionsSummary
