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
    <main className="bg-[#F8F4F0] min-h-screen flex">
      <div className="hidden lg:block sticky top-0 h-screen">
        <Sidebar />
      </div>

      <div className="flex-1 px-4 lg:px-8 py-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Overview</h1>

        <div className="space-y-8">
          <BalanceCards />
          <div className="lg:grid lg:grid-cols-[1.4fr_1fr] gap-6">
            <div className="space-y-6">
              <PotsSection />
              <TransactionsSection />
            </div>

            <div className="row-span-2 space-y-6">
              <BudgetsSection />
              <RecurringBills />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
