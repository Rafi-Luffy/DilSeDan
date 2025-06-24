import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Search, Download, Eye, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const blockchainTransactions = [
  {
    id: "0x1a2b3c4d5e6f",
    donorId: "DN2024001",
    amount: 5000,
    campaign: "Education for All",
    timestamp: "2024-01-15T10:30:00Z",
    status: "confirmed",
    gasUsed: 0,
    blockNumber: 18945672,
    usage: [
      { item: "School books", amount: 2000, verified: true },
      { item: "Uniforms", amount: 1500, verified: true },
      { item: "Stationery", amount: 1000, verified: true },
      { item: "Admin (5%)", amount: 250, verified: true },
      { item: "Remaining", amount: 250, verified: false }
    ]
  },
  {
    id: "0x2b3c4d5e6f7g",
    donorId: "DN2024002",
    amount: 10000,
    campaign: "Clean Water Initiative",
    timestamp: "2024-01-14T15:45:00Z",
    status: "confirmed",
    gasUsed: 0,
    blockNumber: 18945234,
    usage: [
      { item: "Water purification system", amount: 8000, verified: true },
      { item: "Installation", amount: 1500, verified: true },
      { item: "Admin (5%)", amount: 500, verified: true }
    ]
  },
  {
    id: "0x3c4d5e6f7g8h",
    donorId: "DN2024003",
    amount: 2500,
    campaign: "Emergency Food Relief",
    timestamp: "2024-01-13T09:20:00Z",
    status: "pending",
    gasUsed: 0,
    blockNumber: null,
    usage: []
  }
]

const fundAllocation = {
  totalRaised: 2500000,
  totalAllocated: 2100000,
  categories: [
    { name: "Education", amount: 800000, percentage: 32, color: "bg-blue-500" },
    { name: "Healthcare", amount: 600000, percentage: 24, color: "bg-green-500" },
    { name: "Food & Nutrition", amount: 400000, percentage: 16, color: "bg-orange-500" },
    { name: "Water & Sanitation", amount: 300000, percentage: 12, color: "bg-cyan-500" },
    { name: "Emergency Relief", amount: 400000, percentage: 16, color: "bg-red-500" }
  ]
}

export function TransparencyPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTransaction, setSelectedTransaction] = useState(null)

  const filteredTransactions = blockchainTransactions.filter(tx =>
    tx.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.donorId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.campaign.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-charity-blue-600" />
            <h1 className="text-4xl font-bold">Blockchain Transparency</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every donation is recorded on blockchain. Track exactly how your money is being used 
            with complete transparency and zero manipulation.
          </p>
        </motion.div>

        {/* Fund Allocation Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6">Fund Allocation Overview</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4">
                {fundAllocation.categories.map((category, index) => (
                  <div key={category.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm text-gray-600">
                        ₹{category.amount.toLocaleString()} ({category.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${category.percentage}%` }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        className={`h-3 rounded-full ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="text-center p-6 bg-gradient-to-r from-charity-blue-50 to-charity-green-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                <div className="text-3xl font-bold text-charity-blue-600 mb-2">
                  ₹{fundAllocation.totalRaised.toLocaleString()}
                </div>
                <div className="text-gray-600 dark:text-gray-300">Total Raised</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-charity-green-50 to-charity-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                <div className="text-3xl font-bold text-charity-green-600 mb-2">
                  ₹{fundAllocation.totalAllocated.toLocaleString()}
                </div>
                <div className="text-gray-600 dark:text-gray-300">Total Allocated</div>
              </div>
              
              <div className="text-center">
                <Progress 
                  value={(fundAllocation.totalAllocated / fundAllocation.totalRaised) * 100} 
                  className="mb-2"
                />
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {((fundAllocation.totalAllocated / fundAllocation.totalRaised) * 100).toFixed(1)}% funds allocated
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Transaction Explorer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Blockchain Transaction Explorer</h2>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by transaction ID, donor ID, or campaign..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500 focus:border-transparent"
            />
          </div>

          {/* Transactions List */}
          <div className="space-y-4">
            {filteredTransactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedTransaction(transaction)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      transaction.status === 'confirmed' ? 'bg-green-500' :
                      transaction.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                    }`} />
                    <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
                      {transaction.id}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      transaction.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-charity-blue-600">
                      ₹{transaction.amount.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(transaction.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Donor ID</div>
                    <div className="font-medium">{transaction.donorId}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Campaign</div>
                    <div className="font-medium">{transaction.campaign}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Block Number</div>
                    <div className="font-medium">
                      {transaction.blockNumber ? `#${transaction.blockNumber}` : 'Pending'}
                    </div>
                  </div>
                </div>

                {transaction.usage.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-500 mb-2">Fund Usage</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {transaction.usage.map((usage, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          {usage.verified ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <Clock className="h-4 w-4 text-yellow-500" />
                          )}
                          <span className="text-sm">
                            {usage.item}: ₹{usage.amount.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Gas Used: {transaction.gasUsed} (Free for donors)</span>
                    <span>•</span>
                    <span>Verified on Ethereum</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">No transactions found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search criteria
              </p>
            </div>
          )}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
            <Shield className="h-12 w-12 text-charity-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Blockchain Secured</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              All transactions are immutably recorded on Ethereum blockchain
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
            <CheckCircle className="h-12 w-12 text-charity-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">100% Transparent</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Every rupee is tracked from donation to final usage
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
            <AlertCircle className="h-12 w-12 text-charity-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Real-time Updates</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Get instant notifications when your donation is used
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}