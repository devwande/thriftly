const PotActions = ({ onAddMoney, onWithdraw }: { onAddMoney: () => void; onWithdraw: () => void }) => {
return (
<div className="flex gap-3">
<button
onClick={onAddMoney}
className="flex-1 px-4 py-2 border rounded-md text-sm font-medium text-black bg-[#F8F4F0] border-[#F8F4F0] hover:bg-black hover:border-black hover:text-white transition-all duration-300"
>
+ Add Money
</button>
<button
onClick={onWithdraw}
className="flex-1 px-4 py-2 border rounded-md text-sm font-medium text-black bg-[#F8F4F0] border-[#F8F4F0] hover:bg-black hover:border-black hover:text-white transition-all duration-300"
>
Withdraw
</button>
</div>
)
}


export default PotActions