import React from 'react';

interface BillCategory {
  label: string;
  amount: string;
  color: string;
}

const billCategories: BillCategory[] = [
  { label: 'Paid Bills', amount: '190.00', color: '#277C78' },
  { label: 'Total Upcoming', amount: '194.98', color: "#F2CDAC" },
  { label: 'Due Soon', amount: '59.98', color: "#82C9D7" },
];

export const RecurringBills: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Recurring Bills</h2>
        <button className="text-gray-500 hover:text-gray-700 flex items-center text-sm">
          See Details
          <img src={"src/assets/icons/ArrowRight.svg"} alt='right-arrow' className="ml-3" />
        </button>
      </div>

      <div className="space-y-3">
        {billCategories.map((category) => (
          <div
            key={category.label}
            className="flex items-center justify-between bg-[#F8F4F0] rounded-lg"
          >
            <div className="flex items-center space-x-2">
              <div style={{ backgroundColor: category.color }} className='w-1 h-12 rounded-full py-0' />
              <span className='py-4 text-gray-500 px-2'>{category.label}</span>
            </div>
            <span className="font-medium px-2">${category.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

