import { useState } from "react"
import Modal from "./Modal"

interface AddMoneyModalProps {
  isOpen: boolean
  onClose: () => void
  potName: string
  onAddMoney: (amount: number) => void
}

const AddMoneyModal = ({ isOpen, onClose, potName, onAddMoney }: AddMoneyModalProps) => {
  const [amount, setAmount] = useState<number>(0)

  const handleSubmit = () => {
    if (amount > 0) {
      onAddMoney(amount)
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Add Money to ${potName}`}>
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
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-500"
        >
          Add Money
        </button>
      </div>
    </Modal>
  )
}

export default AddMoneyModal
