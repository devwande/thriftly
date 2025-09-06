import { useState } from "react"
import Modal from "./Modal"

interface AddPotModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (name: string, target: number, theme: string) => void
}

const AddPotModal = ({ isOpen, onClose, onAdd }: AddPotModalProps) => {
  const [name, setName] = useState("")
  const [target, setTarget] = useState<number>(0)
  const [theme, setTheme] = useState("#22c55e")

  const handleSubmit = () => {
    if (name && target > 0) {
      onAdd(name, target, theme)
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Pot">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Pot Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-md px-3 py-2"
        />
        <input
          type="number"
          placeholder="Target Amount"
          value={target}
          onChange={(e) => setTarget(Number(e.target.value))}
          className="w-full border rounded-md px-3 py-2"
        />
        <input
          type="color"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="w-12 h-12 rounded-md cursor-pointer"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800"
        >
          Add Pot
        </button>
      </div>
    </Modal>
  )
}

export default AddPotModal
