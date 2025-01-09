import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Transaction {
  id: number;
  name: string;
  amount: string;
  date: string;
  type: 'credit' | 'debit';
  avatar?: string;
}

const transactions: Transaction[] = [
  {
    id: 1,
    name: "Emma Richardson",
    amount: "+$75.50",
    date: "19 Aug 2024",
    type: "credit",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 2,
    name: "Savory Bites Bistro",
    amount: "-$55.50",
    date: "19 Aug 2024",
    type: "debit"
  },
  {
    id: 3,
    name: "Daniel Carter",
    amount: "-$42.30",
    date: "18 Aug 2024",
    type: "debit",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 4,
    name: "Sun Park",
    amount: "+$120.00",
    date: "17 Aug 2024",
    type: "credit",
    avatar: "/placeholder.svg?height=40&width=40"
  }
];

export const TransactionsSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Transactions</h2>
        <button className="text-gray-500 hover:text-gray-700 flex items-center">
          View All
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {transaction.avatar ? (
                <img
                  src={transaction.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">{transaction.name[0]}</span>
                </div>
              )}
              <div>
                <div className="font-medium">{transaction.name}</div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
            </div>
            <span className={transaction.type === 'credit' ? 'text-green-600' : 'text-gray-900'}>
              {transaction.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

