import React from "react";
import { PieChart, Pie, Cell } from "recharts";

interface BudgetItem {
  label: string;
  amount: number;
  color: string;
}

const budgetItems: BudgetItem[] = [
  { label: "Entertainment", amount: 50, color: "#277C78" }, 
  { label: "Bills", amount: 750, color: "#82C9D7" },
  { label: "Dining Out", amount: 75, color: "#F2CDAC" },
  { label: "Personal Care", amount: 100, color: "#626070" },
];

const totalLimit = 975;
const spent = 338;

export const BudgetsSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Budgets</h2>
        <button className="text-gray-500 hover:text-gray-700 flex items-center text-sm">
          See Details
          <img src={"src/assets/icons/ArrowRight.svg"} alt='right-arrow' className="ml-3" />
        </button>
      </div>


      <div className="flex items-center space-x-8">

        <div className="flex justify-center relative w-64 h-64 items-center">
          <PieChart width={280} height={280}>
            <Pie data={budgetItems} dataKey="amount" cx="50%" cy="50%" innerRadius={80} outerRadius={120} startAngle={90} endAngle={450} >
              {budgetItems.map((item, index) => (
                <Cell key={`cell-${index}`} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-bold">${spent}</div>
            <div className="text-sm text-gray-500">of ${totalLimit} limit</div>
          </div>
        </div>

        {/* Budget Details */}
        <div className="space-y-3">
          {budgetItems.map((item) => (
            <div key={item.label} className="flex items-center">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-1 h-11 mr-3 rounded-full`}
                  style={{ backgroundColor: item.color }}
                />
              </div>
              <div className="space-y-2">
                <div className="text-gray-500">{item.label}</div>
                <div>${item.amount.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
