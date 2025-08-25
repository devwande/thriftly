import { Search, Filter, ArrowUpDown } from "lucide-react"
import { useState } from "react"

interface TransactionsFiltersProps {
  searchTerm: string
  setSearchTerm: (v: string) => void
  sortBy: string
  setSortBy: (v: string) => void
  categoryFilter: string
  setCategoryFilter: (v: string) => void
  categories: string[]
}

const TransactionsFilters = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  categoryFilter,
  setCategoryFilter,
  categories,
}: TransactionsFiltersProps) => {
  const [showSortMenu, setShowSortMenu] = useState(false)
  const [showCategoryMenu, setShowCategoryMenu] = useState(false)

  const sortOptions = [
    { value: "latest", label: "Latest" },
    { value: "oldest", label: "Oldest" },
    { value: "a-z", label: "A to Z" },
    { value: "z-a", label: "Z to A" },
    { value: "highest", label: "Highest" },
    { value: "lowest", label: "Lowest" },
  ]

  const categoryOptions = [
    { value: "all", label: "All Transactions" },
    ...categories.map((category) => ({ value: category, label: category })),
  ]

  const handleSortClick = () => {
    setShowSortMenu(!showSortMenu)
    setShowCategoryMenu(false)
  }

  const handleCategoryClick = () => {
    setShowCategoryMenu(!showCategoryMenu)
    setShowSortMenu(false)
  }

  return (
    <div className="bg-white rounded-t-lg">
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search transaction"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm text-gray-600">Category</span>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:hidden relative">
              <button
                onClick={handleSortClick}
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <ArrowUpDown className="h-4 w-4 text-gray-600" />
              </button>
              {showSortMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value)
                          setShowSortMenu(false)
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="md:hidden relative">
              <button
                onClick={handleCategoryClick}
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <Filter className="h-4 w-4 text-gray-600" />
              </button>
              {showCategoryMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <div className="py-1">
                    {categoryOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setCategoryFilter(option.value)
                          setShowCategoryMenu(false)
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionsFilters