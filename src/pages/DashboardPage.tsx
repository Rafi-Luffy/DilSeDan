import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { Heart, TrendingUp, Users, Award, Download, Calendar, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useDonationStore } from '@/store/donationStore'
import { formatCurrency } from '@/lib/utils'

const monthlyData = [
  { month: 'Jan', donations: 45000, donors: 120 },
  { month: 'Feb', donations: 52000, donors: 145 },
  { month: 'Mar', donations: 48000, donors: 132 },
  { month: 'Apr', donations: 61000, donors: 167 },
  { month: 'May', donations: 55000, donors: 151 },
  { month: 'Jun', donations: 67000, donors: 189 },
]

const categoryData = [
  { name: 'Education', value: 35, color: '#3B82F6' },
  { name: 'Healthcare', value: 25, color: '#10B981' },
  { name: 'Food & Nutrition', value: 20, color: '#F97316' },
  { name: 'Water & Sanitation', value: 15, color: '#06B6D4' },
  { name: 'Emergency Relief', value: 5, color: '#EF4444' },
]

const impactData = [
  { category: 'Meals Provided', count: 15420, icon: '🍽️' },
  { category: 'Children Educated', count: 2340, icon: '📚' },
  { category: 'Medical Treatments', count: 890, icon: '🏥' },
  { category: 'Water Systems', count: 45, icon: '💧' },
]

export function DashboardPage() {
  const { donations, totalDonated } = useDonationStore()
  const [timeRange, setTimeRange] = useState('6months')

  const userStats = {
    totalDonated: totalDonated || 25000,
    totalDonations: donations.length || 12,
    impactScore: 850,
    rank: 'Gold Donor',
    taxSaved: Math.floor((totalDonated || 25000) * 0.5),
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold mb-2">Your Impact Dashboard</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Track your donations and see the difference you're making
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500"
            >
              <option value="1month">Last Month</option>
              <option value="3months">Last 3 Months</option>
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last Year</option>
            </select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-charity-blue-100 dark:bg-charity-blue-900 rounded-full">
                <Heart className="h-6 w-6 text-charity-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Total</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {formatCurrency(userStats.totalDonated)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Donated</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-charity-green-100 dark:bg-charity-green-900 rounded-full">
                <TrendingUp className="h-6 w-6 text-charity-green-600" />
              </div>
              <span className="text-sm text-gray-500">Count</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {userStats.totalDonations}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Donations</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-charity-orange-100 dark:bg-charity-orange-900 rounded-full">
                <Award className="h-6 w-6 text-charity-orange-600" />
              </div>
              <span className="text-sm text-gray-500">Score</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {userStats.impactScore}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Impact Points</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-500">Tax Saved</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {formatCurrency(userStats.taxSaved)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Under 80G</div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Donation Trends */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-6">Donation Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [formatCurrency(value), 'Donations']} />
                  <Line 
                    type="monotone" 
                    dataKey="donations" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Impact Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-6">Your Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                {impactData.map((impact, index) => (
                  <div key={impact.category} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="text-3xl mb-2">{impact.icon}</div>
                    <div className="text-2xl font-bold text-charity-blue-600 mb-1">
                      {impact.count.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {impact.category}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Donations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-6">Recent Donations</h3>
              <div className="space-y-4">
                {[
                  { campaign: 'Education for All', amount: 5000, date: '2024-01-15', status: 'Used' },
                  { campaign: 'Clean Water Initiative', amount: 3000, date: '2024-01-10', status: 'In Progress' },
                  { campaign: 'Emergency Food Relief', amount: 2000, date: '2024-01-05', status: 'Used' },
                  { campaign: 'Healthcare Support', amount: 4000, date: '2024-01-01', status: 'Used' },
                ].map((donation, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-medium">{donation.campaign}</div>
                      <div className="text-sm text-gray-500">{donation.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-charity-blue-600">
                        {formatCurrency(donation.amount)}
                      </div>
                      <div className={`text-sm px-2 py-1 rounded-full ${
                        donation.status === 'Used' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {donation.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Donor Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-charity-blue-500 to-charity-green-500 rounded-2xl shadow-lg p-6 text-white text-center"
            >
              <Award className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{userStats.rank}</h3>
              <p className="text-blue-100 mb-4">
                You're in the top 10% of donors this year!
              </p>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-2xl font-bold">{userStats.impactScore}</div>
                <div className="text-sm text-blue-100">Impact Points</div>
              </div>
            </motion.div>

            {/* Category Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-6">Donation Categories</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-4">
                {categoryData.map((category) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <span className="text-sm font-medium">{category.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tax Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4">Tax Benefits (80G)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Total Donated</span>
                  <span className="font-bold">{formatCurrency(userStats.totalDonated)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Tax Deduction</span>
                  <span className="font-bold text-charity-green-600">{formatCurrency(userStats.taxSaved)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Effective Cost</span>
                  <span className="font-bold">{formatCurrency(userStats.totalDonated - userStats.taxSaved)}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Download className="h-4 w-4 mr-2" />
                Download Tax Certificate
              </Button>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="charity" className="w-full">
                  Make Another Donation
                </Button>
                <Button variant="outline" className="w-full">
                  View Impact Stories
                </Button>
                <Button variant="outline" className="w-full">
                  Share Your Impact
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}