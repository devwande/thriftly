import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BudgetItem {
  label: string;
  amount: string;
  color: string;
}

const budgetItems: BudgetItem[] = [
  { label: 'Entertainment', amount: '50.00', color: 'bg-emerald-500' },
  { label: 'Bills', amount: '750.00', color: 'bg-cyan-400' },
  { label: 'Dining Out', amount: '75.00', color: 'bg-orange-200' },
  { label: 'Personal Care', amount: '100.00', color: 'bg-gray-500' },
];

export const BudgetsSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Budgets</h2>
        <button className="text-gray-500 hover:text-gray-700 flex items-center">
          See Details
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>

      <div className="flex items-center space-x-8">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="20"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="20"
              strokeDasharray="251.2"
              strokeDashoffset="188.4"
              className="text-cyan-400"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-bold">$338</div>
            <div className="text-sm text-gray-500">of $975 limit</div>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          {budgetItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <span>{item.label}</span>
              </div>
              <span>${item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

