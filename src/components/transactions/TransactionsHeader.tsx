interface TransactionsHeaderProps {
  title: string
}

const TransactionsHeader = ({ title }: TransactionsHeaderProps) => {
  return (
    <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
  )
}

export default TransactionsHeader
