const PotActions = ({ onAddMoney, onWithdraw }: { onAddMoney: () => void; onWithdraw: () => void }) => {
return (
<div className="flex gap-3">
<button
onClick={onAddMoney}
className="flex-1 px-4 py-2 border rounded-md text-sm font-medium text-gray-900 border-gray-300 hover:bg-gray-50 bg-transparent"
>
+ Add Money
</button>
<button
onClick={onWithdraw}
className="flex-1 px-4 py-2 border rounded-md text-sm font-medium text-gray-900 border-gray-300 hover:bg-gray-50 bg-transparent"
>
Withdraw
</button>
</div>
)
}


export default PotActions