import { Search } from "lucide-react"

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
  return (
    <div className="bg-white rounded-lg overflow-hidden mb-6">
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
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

          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="a-z">A to Z</option>
                <option value="z-a">Z to A</option>
                <option value="highest">Highest</option>
                <option value="lowest">Lowest</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Category</span>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="all">All Transactions</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionsFilters
