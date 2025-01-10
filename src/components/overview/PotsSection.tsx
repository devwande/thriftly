// import { DollarSign, ChevronRight } from 'lucide-react'

// interface PotItemProps {
//   label: string
//   amount: number
//   color: string
// }

// const PotItem: React.FC<PotItemProps> = ({ label, amount, color }) => {
//   return (
//     <div className="flex items-center justify-between py-2">
//       <div className="flex items-center gap-2">
//         <div className={`w-1 h-8 rounded ${color}`} />
//         <span className="text-gray-900">{label}</span>
//       </div>
//       <span className="font-medium">${amount}</span>
//     </div>
//   )
// }

// export default function PotsSection() {
//   const pots = [
//     { label: 'Savings', amount: 159, color: 'bg-blue-500' },
//     { label: 'Gift', amount: 40, color: 'bg-blue-300' },
//     { label: 'Concert Ticket', amount: 110, color: 'bg-gray-700' },
//     { label: 'New Laptop', amount: 10, color: 'bg-orange-200' },
//   ]

//   return (
//     <div className="p-6 bg-white rounded-xl">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-xl font-semibold text-gray-900">Pots</h2>
//         <button className="flex items-center text-gray-500 hover:text-gray-700">
//           See Details
//           <ChevronRight className="w-4 h-4 ml-1" />
//         </button>
//       </div>

//       <div className="flex gap-8">
//         <div className="px-6 bg-gray-50 rounded-xl">
//           <div className="flex items-center gap-3 mb-2">
//             <div className="p-2 bg-teal-100 rounded-lg">
//               <DollarSign className="w-6 h-6 text-teal-700" />
//             </div>
//             <div className="text-sm text-gray-600">Total Saved</div>
//           </div>
//           <div className="text-3xl font-bold">$850</div>
//         </div>

//         <div className="flex-1 space-y-1">
//           {pots.map((pot) => (
//             <PotItem
//               key={pot.label}
//               label={pot.label}
//               amount={pot.amount}
//               color={pot.color}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

import { ChevronRight } from "lucide-react";

const PotsSection = () => {
  return (
    <div className="w-full p-4 bg-white rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Pots</h2>
        <button className="flex items-center text-sm text-gray-500 hover:underline">See Details <ChevronRight className="w-4 h-4 ml-1" /> </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="mt-4 p-4 bg-[#F8F4F0] rounded-lg flex w-3/4">
          <div className="flex items-center">
            <div className="flex justify-start items-center">
              <img src={"src/assets/icons/money.svg"} alt="" />
            </div>
            <div className="ml-4 space-y-3">
              <p className="text-sm text-gray-500">Total Saved</p>
              <p className="text-2xl font-bold">$850</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-4 gap-4">
          <div className="flex items-center">
            <div className="w-1 h-10 rounded-md bg-teal-600 mr-5"></div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Savings</p>
              <p className="text-sm font-medium">$159</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-10 rounded-md bg-blue-400 mr-5"></div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Gift</p>
              <p className="text-sm font-medium">$40</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-10 rounded-md bg-gray-600 mr-5"></div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Concert Ticket</p>
              <p className="text-sm font-medium">$110</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-10 rounded-md bg-orange-300 mr-5"></div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">New Laptop</p>
              <p className="text-sm font-medium">$10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotsSection;
