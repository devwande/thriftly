import React from 'react';

interface Transaction {
  id: number;
  name: string;
  amount: string;
  date: string;
  type: 'credit' | 'debit';
  profile?: string;
}

const transactions: Transaction[] = [
  { id: 1, name: "Emma Richardson", amount: "+$75.50", date: "19 Aug 2024", type: "credit", profile: "src/assets/icons/profile.svg" },
  { id: 2, name: "Savory Bites Bistro", amount: "-$55.50", date: "19 Aug 2024", type: "debit", profile: "src/assets/icons/profile.svg" },
  {  id: 3, name: "Daniel Carter", amount: "-$42.30", date: "18 Aug 2024", type: "debit", profile: "src/assets/icons/profile.svg" },
  { id: 4, name: "Sun Park", amount: "+$120.00", date: "17 Aug 2024",  type: "credit", profile: "src/assets/icons/profile.svg" },
  { id: 5, name: "Urban Services Hub", amount: "-$65.00", date: "17 Aug 2024", type: "debit", profile: "src/assets/icons/profile.svg" },
];

export const TransactionsSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Transactions</h2>
        <button className="text-gray-500 hover:text-gray-700 flex items-center text-sm">
          View All
          <img src={"src/assets/icons/ArrowRight.svg"} alt='right-arrow' className="ml-3" />
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <React.Fragment key={transaction.id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img src={transaction.profile} alt="profile" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-medium">{transaction.name}</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className={transaction.type === 'credit' ? 'text-green-600 flex justify-end' : 'flex justify-end text-gray-900'}>
                  {transaction.amount}
                </div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
            </div>
            {index < transactions.length - 1 && <hr className="border-t border-gray-200" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

