// import Sidebar from "../components/Sidebar";

// const Overview = () => {
//   return (
//     <div className="flex flex-row relative">
//       <Sidebar />
//       <p className="font-bold p-8 text-3xl">Overview</p>
//       <div className="grid grid-rows-3 pt-20 space-x-10 m-8">
//         <div className="bg-black text-white">Current Balance</div>
//         <div>Income</div>
//         <div>Exepsnses</div>
//       </div>
//     </div>
//   );
// };

// export default Overview;

import React from "react";
import { BalanceCards } from "../components/overview/BalanceCards";
import PotsSection from "../components/overview/PotsSection";
import { TransactionsSection } from "../components/overview/TransactionsSection";
import { BudgetsSection } from "../components/overview/BudgetsSection";
import { RecurringBills } from "../components/overview/Recurringbills";
import Sidebar from "../components/Sidebar";

export const Overview: React.FC = () => {
  return (
    <div className="flex flex-row bg-[#F8F4F0]">
      <div>
        <Sidebar />
      </div>

      <div className="relative w-full mx-8">
        <h1 className="text-3xl font-bold my-8">Overview</h1>

        <div className="space-y-4">
          <div className="space-y-8">
            <BalanceCards />
          </div>

          <div className="grid grid-cols-[1.3fr_1fr] gap-6">
            <div className="space-y-6">
              <PotsSection />
              <TransactionsSection />
            </div>
            <div className="row-span-2 space-y-6">
              <BudgetsSection />
              <RecurringBills />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
