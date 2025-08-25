import { ChevronLeft, ChevronRight } from "lucide-react"

interface TransactionsPaginationProps {
  currentPage: number
  totalPages: number
  setCurrentPage: (p: number) => void
}

const TransactionsPagination = ({ currentPage, totalPages, setCurrentPage }: TransactionsPaginationProps) => {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-t bg-white rounded-b-lg">
      <button
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className={`flex items-center gap-1 sm:gap-2 px-3 py-2 border rounded-md text-sm ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 active:bg-gray-200"
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden xs:inline">Prev</span>
      </button>

      <div className="flex items-center gap-1 sm:gap-2">
        {/* Mobile view with ellipsis */}
        <div className="flex sm:hidden items-center gap-1">
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="w-8 h-8 flex items-center justify-center rounded-md text-sm border hover:bg-gray-100 active:bg-gray-200 text-gray-700"
              aria-label={`Page ${currentPage - 1}`}
            >
              {currentPage - 1}
            </button>
          )}
          
          <button
            className="w-8 h-8 flex items-center justify-center rounded-md text-sm bg-black text-white"
            aria-label={`Current page, page ${currentPage}`}
            aria-current="page"
          >
            {currentPage}
          </button>
          
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="w-8 h-8 flex items-center justify-center rounded-md text-sm border hover:bg-gray-100 active:bg-gray-200 text-gray-700"
              aria-label={`Page ${currentPage + 1}`}
            >
              {currentPage + 1}
            </button>
          )}
          
          {currentPage < totalPages - 1 && (
            <>
              <span className="text-gray-500 mx-1">...</span>
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="w-8 h-8 flex items-center justify-center rounded-md text-sm border hover:bg-gray-100 active:bg-gray-200 text-gray-700"
                aria-label={`Last page, page ${totalPages}`}
              >
                {totalPages}
              </button>
            </>
          )}
        </div>
        
        <div className="hidden sm:flex items-center gap-2">
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
      </div>

      <button
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-1 sm:gap-2 px-3 py-2 border rounded-md text-sm ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 active:bg-gray-200"
        }`}
        aria-label="Next page"
      >
        <span className="hidden xs:inline">Next</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}

export default TransactionsPagination