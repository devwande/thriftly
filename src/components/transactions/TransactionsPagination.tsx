import { ChevronLeft, ChevronRight } from "lucide-react"

interface TransactionsPaginationProps {
  currentPage: number
  totalPages: number
  setCurrentPage: (p: number) => void
}

const TransactionsPagination = ({ currentPage, totalPages, setCurrentPage }: TransactionsPaginationProps) => {
  return (
    <div className="flex items-center justify-between px-6 py-6 border-t bg-white rounded-b-lg">
      <button
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className={`flex items-center gap-2 px-3 py-2 border rounded-md text-sm ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
      >
        <ChevronLeft className="h-4 w-4" />
        Prev
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const pageNum = i + 1
          return (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-10 h-10 flex items-center justify-center rounded-md text-sm ${
                currentPage === pageNum
                  ? "bg-black text-white"
                  : "border hover:bg-gray-100 text-gray-700"
              }`}
            >
              {pageNum}
            </button>
          )
        })}
        {totalPages > 5 && (
          <>
            <span className="text-gray-500">...</span>
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`w-8 h-8 flex items-center justify-center rounded-md text-sm ${
                currentPage === totalPages
                  ? "bg-black text-white"
                  : "border hover:bg-gray-100 text-gray-700"
              }`}
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      <button
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-2 px-3 py-2 border rounded-md text-sm ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}

export default TransactionsPagination
