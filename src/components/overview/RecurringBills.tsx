import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BillCategory {
  label: string;
  amount: string;
  color: string;
}

const billCategories: BillCategory[] = [
  { label: 'Paid Bills', amount: '190.00', color: 'bg-emerald-500' },
  { label: 'Total Upcoming', amount: '194.98', color: 'bg-orange-200' },
  { label: 'Due Soon', amount: '59.98', color: 'bg-emerald-500' },
];

export const RecurringBills: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Recurring Bills</h2>
        <button className="text-gray-500 hover:text-gray-700 flex items-center">
          See Details
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>

      <div className="space-y-3">
        {billCategories.map((category) => (
          <div
            key={category.label}
            className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
          >
            <div className="flex items-center space-x-2">
              <div className={`w-1 h-6 rounded-full ${category.color}`} />
              <span>{category.label}</span>
            </div>
            <span className="font-medium">${category.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

