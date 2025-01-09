import React from 'react';

interface BalanceCardProps {
  label: string;
  amount: string;
  variant?: 'light' | 'dark';
}

const BalanceCard: React.FC<BalanceCardProps> = ({ label, amount, variant = 'light' }) => {
  return (
    <div className={`p-6 rounded-lg ${
      variant === 'dark' ? 'bg-black text-white' : 'bg-white'
    }`}>
      <div className="text-sm mb-2">{label}</div>
      <div className="text-3xl font-bold">{amount}</div>
    </div>
  );
}

export const BalanceCards: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <BalanceCard
        label="Current Balance"
        amount="$4,836.00"
        variant="dark"
      />
      <BalanceCard
        label="Income"
        amount="$3,814.25"
      />
      <BalanceCard
        label="Expenses"
        amount="$1,700.50"
      />
    </div>
  );
}

