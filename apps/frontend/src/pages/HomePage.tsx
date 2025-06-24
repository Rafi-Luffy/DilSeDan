import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Users, TrendingUp, Heart, Globe, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useDonationStore } from '@/store/donationStore'
import { formatCurrency, formatNumber, getProgressPercentage } from '@/lib/utils'

export function HomePage() {
  const { campaigns } = useDonationStore()
  const featuredCampaigns = campaigns.slice(0, 3)

  const stats = [
    { label: 'Total Donations', value: '₹2.5 Cr', icon: Heart },
    { label: 'Lives Impacted', value: '50,000+', icon: Users },
    { label: 'Active Campaigns', value: '127', icon: TrendingUp },
    { label: 'Countries Reached', value: '12', icon: Globe },
  ]

  const features = [
    {
      icon: Shield,
      title: 'Blockchain Transparency',
      description: 'Every donation is tracked on blockchain, ensuring complete transparency and accountability.',
    },
    {
      icon: Zap,
      title: 'Instant Impact',
      description: 'See real-time updates on how your donations are making a difference in people\'s lives.',
    },
    {
      icon: Users,
      title: 'Global Community',
      description: 'Join millions of donors worldwide who are making a positive impact together.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charity-blue-50 to-charity-green-50 dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Transform Lives</span>
              <br />
              <span className="text-gray-800 dark:text-gray-200">Through Transparent Giving</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of charity donations. Every rupee is tracked on blockchain, 
              every impact is verified, and every story is real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="xl"
                variant="charity"
                className="glow-on-hover"
              >
                <Link to="/donate">
                  Start Donating
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
              >
                <Link to="/transparency">View Transparency</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-charity-blue-100 dark:bg-charity-blue-900 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-charity-blue-600 dark:text-charity-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Campaigns</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Make a difference today. Choose a cause that matters to you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative">
                  <img
                    src={campaign.imageUrl}
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />
                  {campaign.isUrgent && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Urgent
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-charity-blue-600 dark:text-charity-blue-400 font-medium">
                      {campaign.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {campaign.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {campaign.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Progress</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {getProgressPercentage(campaign.raisedAmount, campaign.targetAmount).toFixed(0)}%
                      </span>
                    </div>
                    <Progress value={getProgressPercentage(campaign.raisedAmount, campaign.targetAmount)} />
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {formatCurrency(campaign.raisedAmount)}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          raised of {formatCurrency(campaign.targetAmount)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {formatNumber(campaign.donorCount)}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          donors
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    asChild
                    className="w-full mt-4"
                    variant="charity"
                  >
                    <Link to={`/donate?campaign=${campaign.id}`}>
                      Donate Now
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
            >
              <Link to="/campaigns">
                View All Campaigns
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose CharityFlow?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Experience the future of charitable giving with complete transparency and trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 card-hover"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-charity-blue-500 to-charity-green-500 rounded-full mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-charity-blue-600 to-charity-green-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of donors who trust CharityFlow for transparent, 
              impactful charitable giving. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="xl"
                variant="secondary"
                className="bg-white text-charity-blue-600 hover:bg-gray-100"
              >
                <Link to="/donate">Start Donating</Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-charity-blue-600"
              >
                <Link to="/volunteer">Become a Volunteer</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}