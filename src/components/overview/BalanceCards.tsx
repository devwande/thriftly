import React, { useEffect, useState } from 'react';

interface BalanceData {
  balance: {
    current: number
    income: number
    expenses: number
  }
}

const BalanceCards: React.FC = () => {
  const [data, setData] = useState<BalanceData | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json: BalanceData) => setData(json))
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
    <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-3 gap-6">
      <div className="p-4 md:p-6 rounded-lg bg-black text-white">
        <div className="text-sm mb-2">Current Balance</div>
        <div className="text-3xl font-bold">${data.balance.current.toFixed(2)}</div>
      </div>
      <div className="p-4 md:p-6 rounded-lg bg-white">
        <div className="text-sm mb-2">Income</div>
        <div className="text-3xl font-bold">${data.balance.income.toFixed(2)}</div>
      </div>
      <div className="p-4 md:p-6 rounded-lg bg-white">
        <div className="text-sm mb-2">Expenses</div>
        <div className="text-3xl font-bold">${data.balance.expenses.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default BalanceCards;
