import { useState } from "react"
import Modal from "./Modal"

interface WithdrawMoneyModalProps {
  isOpen: boolean
  onClose: () => void
  potName: string
  onWithdraw: (amount: number) => void
}

const WithdrawMoneyModal = ({ isOpen, onClose, potName, onWithdraw }: WithdrawMoneyModalProps) => {
  const [amount, setAmount] = useState<number>(0)

  const handleSubmit = () => {
    if (amount > 0) {
      onWithdraw(amount)
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Withdraw from ${potName}`}>
      <div className="space-y-4">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full border rounded-md px-3 py-2"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-500"
        >
          Withdraw
        </button>
      </div>
    </Modal>
  )
}

export default WithdrawMoneyModal
