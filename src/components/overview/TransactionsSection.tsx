import React, { useEffect, useState } from 'react';

interface TransactionData {
  transactions: Array<{
    avatar: string
    name: string
    category: string
    date: string
    amount: number
    recurring: boolean
  }>
}

export const TransactionsSection: React.FC = () => {
  const [data, setData] = useState<TransactionData | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json: TransactionData) => setData(json))
      .catch(console.error);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Transactions</h2>
        <a href='/transactions' className="text-gray-500 hover:text-gray-700 flex items-center text-sm">
          View All
          <img
            src={"/assets/icons/ArrowRight.svg"}
            alt="right-arrow"
            className="ml-3"
          />
        </a>
      </div>

      <div className="divide-y divide-gray-200">
        {data.transactions.slice(0, 5).map((transaction, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-[15px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={transaction.avatar}
                  alt={transaction.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{transaction.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-semibold ${
                  transaction.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {transaction.amount > 0 ? "+" : "-"}$
                {Math.abs(transaction.amount).toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">
                {new Date(transaction.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
