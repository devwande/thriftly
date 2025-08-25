"use client"

import { useState, useEffect, useMemo } from "react"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
import TransactionsHeader from "../components/transactions/TransactionsHeader"
import TransactionsFilters from "../components/transactions/TransactionsFilters"
import TransactionsTable from "../components/transactions/TransactionsTable"
import TransactionsPagination from "../components/transactions/TransactionsPagination"
import TransactionsSummary from "../components/transactions/TransactionsSummary"

interface Transaction {
  avatar: string
  name: string
  category: string
  date: string
  amount: number
  recurring: boolean
}

interface FinanceData {
  transactions: Transaction[]
}

const Transactions = () => {
  const [data, setData] = useState<FinanceData | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("latest")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  const filteredAndSortedTransactions = useMemo(() => {
    if (!data) return []
    const filtered = data.transactions.filter((transaction) => {
      const matchesSearch =
        transaction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = categoryFilter === "all" || transaction.category === categoryFilter
      return matchesSearch && matchesCategory
    })
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "latest":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "a-z":
          return a.name.localeCompare(b.name)
        case "z-a":
          return b.name.localeCompare(a.name)
        case "highest":
          return b.amount - a.amount
        case "lowest":
          return a.amount - b.amount
        default:
          return 0
      }
    })
    return filtered
  }, [data, searchTerm, sortBy, categoryFilter])

  const totalPages = Math.ceil(filteredAndSortedTransactions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedTransactions = filteredAndSortedTransactions.slice(startIndex, startIndex + itemsPerPage)

  const categories = useMemo(() => {
    if (!data) return []
    const uniqueCategories = [...new Set(data.transactions.map((t) => t.category))]
    return uniqueCategories.sort()
  }, [data])

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F4F0] flex">
      <div className="hidden lg:block sticky top-0 h-screen">
        <Sidebar />
      </div>
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <TransactionsHeader title="Transactions" />

          <TransactionsFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            categories={categories}
          />

          <TransactionsTable transactions={paginatedTransactions} formatDate={formatDate} />

          <TransactionsPagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />

          <TransactionsSummary
            startIndex={startIndex}
            itemsPerPage={itemsPerPage}
            total={filteredAndSortedTransactions.length}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Transactions
