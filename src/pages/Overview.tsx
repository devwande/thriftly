import React from "react";
import BalanceCards from "../components/overview/BalanceCards";
import PotsSection from "../components/overview/PotsSection";
import { TransactionsSection } from "../components/overview/TransactionsSection";
import { BudgetsSection } from "../components/overview/BudgetsSection";
import { RecurringBills } from "../components/overview/RecurringBills";
import Sidebar from "../components/Sidebar";
import Footer from "../components/overview/Footer";

export const Overview: React.FC = () => {
  return (
    <div className="mx-auto lg:mx-0">
      <div className="flex flex-row bg-[#F8F4F0]  lg:h-screen">
        <div className="hidden lg:block ">
          <Sidebar />
        </div>
        <div className="relative w-full mx-4 lg:mx-8 my-auto">           {/* my-auto may be removed based on styling issues */}
          <h1 className="text-3xl font-bold my-5">Overview</h1>
          <div className="space-y-4">
            <div className="space-y-8">
              <BalanceCards />
            </div>
            <div className="lg:grid lg:grid-cols-[1.4fr_1fr] gap-6 space-y-3">
              <div className="space-y-3">
                <PotsSection />
                <TransactionsSection />
              </div>
              <div className="row-span-2 space-y-3 pb-3 lg:pb-0">
                <BudgetsSection />
                <RecurringBills />
                <Footer />
              </div>
            </div>
          </div>
        </div>
   
      </div>

    </div>
  );
};
