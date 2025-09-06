interface DeletePotModalProps {
  isOpen: boolean
  onClose: () => void
  potName: string
  onConfirm: () => void
}

const DeletePotModal = ({ isOpen, onClose, potName, onConfirm }: DeletePotModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Delete Pot</h2>
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to delete the pot "{potName}"?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletePotModal
