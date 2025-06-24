import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, MapPin, Clock, Users, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useDonationStore } from '@/store/donationStore'
import { formatCurrency, formatNumber, getProgressPercentage } from '@/lib/utils'

const categories = [
  'All',
  'Education',
  'Food & Nutrition',
  'Healthcare',
  'Water & Sanitation',
  'Emergency Relief',
  'Women Empowerment',
  'Child Welfare',
]

const locations = [
  'All Locations',
  'Rural Areas',
  'Urban Slums',
  'Disaster Areas',
  'Tribal Areas',
]

export function CampaignsPage() {
  const { campaigns } = useDonationStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [sortBy, setSortBy] = useState('newest')

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || campaign.category === selectedCategory
    const matchesLocation = selectedLocation === 'All Locations' || 
                           campaign.location.toLowerCase().includes(selectedLocation.toLowerCase())
    
    return matchesSearch && matchesCategory && matchesLocation
  })

  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
    switch (sortBy) {
      case 'urgent':
        return b.isUrgent ? 1 : -1
      case 'amount':
        return b.targetAmount - a.targetAmount
      case 'progress':
        return getProgressPercentage(b.raisedAmount, b.targetAmount) - 
               getProgressPercentage(a.raisedAmount, a.targetAmount)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Active Campaigns</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover causes that need your support and create lasting impact
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500 focus:border-transparent"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500 focus:border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="urgent">Urgent First</option>
              <option value="amount">Highest Target</option>
              <option value="progress">Most Progress</option>
            </select>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {sortedCampaigns.length} campaigns found
            </span>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Active filters: {[selectedCategory, selectedLocation].filter(f => !f.includes('All')).length}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Campaigns Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCampaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <div className="relative">
                <img
                  src={campaign.imageUrl}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  {campaign.isUrgent && (
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Urgent
                    </div>
                  )}
                  <div className="bg-charity-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {campaign.category}
                  </div>
                </div>

                {/* Progress Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {getProgressPercentage(campaign.raisedAmount, campaign.targetAmount).toFixed(0)}% Complete
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{campaign.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>5 days left</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {campaign.description}
                </p>

                {/* Progress Section */}
                <div className="space-y-3 mb-4">
                  <Progress value={getProgressPercentage(campaign.raisedAmount, campaign.targetAmount)} />
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lg font-bold text-charity-blue-600">
                        {formatCurrency(campaign.raisedAmount)}
                      </div>
                      <div className="text-sm text-gray-500">
                        raised of {formatCurrency(campaign.targetAmount)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {formatNumber(campaign.donorCount)}
                      </div>
                      <div className="text-sm text-gray-500">
                        donors
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Preview */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Help {formatNumber(Math.floor(campaign.targetAmount / 500))} families
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Button
                    asChild
                    variant="charity"
                    className="flex-1"
                  >
                    <Link to={`/donate?campaign=${campaign.id}`}>
                      Donate Now
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                  >
                    <Link to={`/campaigns/${campaign.id}`}>
                      <Users className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {sortedCampaigns.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No campaigns found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Try adjusting your search criteria or browse all campaigns
            </p>
            <Button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
                setSelectedLocation('All Locations')
              }}
              variant="charity"
            >
              Show All Campaigns
            </Button>
          </motion.div>
        )}

        {/* Load More */}
        {sortedCampaigns.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Campaigns
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}