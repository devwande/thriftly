import React from 'react';
import { ChevronRight } from 'lucide-react';

interface PotItemProps {
  label: string;
  amount: string;
  color: string;
}

const PotItem: React.FC<PotItemProps> = ({ label, amount, color }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-full ${color}`} />
        <span>{label}</span>
      </div>
      <span>${amount}</span>
    </div>
  );
}

export const PotsSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Pots</h2>
        <button className="text-gray-500 hover:text-gray-700 flex items-center">
          See Details
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>

      <div className="flex space-x-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Total Saved</div>
          <div className="text-3xl font-bold mt-2">$850</div>
        </div>

        <div className="flex-1 space-y-2">
          <PotItem label="Savings" amount="159" color="bg-emerald-500" />
          <PotItem label="Concert Ticket" amount="110" color="bg-emerald-500" />
          <PotItem label="Gift" amount="40" color="bg-blue-300" />
          <PotItem label="New Laptop" amount="10" color="bg-orange-200" />
        </div>
      </div>
    </div>
  );
}

