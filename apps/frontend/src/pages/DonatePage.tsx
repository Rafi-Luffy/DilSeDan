import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { Heart, Shield, Clock, Users, CreditCard, Smartphone, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useDonationStore } from '@/store/donationStore'
import { DonationForm } from '@/components/donation/DonationForm'
import { TaxCalculator } from '@/components/donation/TaxCalculator'
import { ImpactPreview } from '@/components/donation/ImpactPreview'
import { formatCurrency, getProgressPercentage } from '@/lib/utils'

export function DonatePage() {
  const [searchParams] = useSearchParams()
  const campaignId = searchParams.get('campaign')
  const { campaigns, getCampaignById } = useDonationStore()
  const [selectedCampaign, setSelectedCampaign] = useState(null)

  useEffect(() => {
    if (campaignId) {
      const campaign = getCampaignById(campaignId)
      setSelectedCampaign(campaign)
    }
  }, [campaignId, getCampaignById])

  const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: Smartphone, description: 'Pay with PhonePe, Google Pay, Paytm' },
    { id: 'card', name: 'Card', icon: CreditCard, description: 'Credit/Debit Card payments' },
    { id: 'netbanking', name: 'Net Banking', icon: Building2, description: 'All Indian banks supported' },
  ]

  const securityFeatures = [
    { icon: Shield, title: 'Blockchain Secured', description: 'All transactions recorded on blockchain' },
    { icon: Users, title: 'Verified NGOs', description: 'All partner organizations are verified' },
    { icon: Clock, title: 'Real-time Tracking', description: 'Track your donation impact instantly' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Make a Donation</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your contribution can change lives. Choose transparency, choose impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Campaign Selection */}
            {!selectedCampaign && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold mb-6">Choose a Campaign</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {campaigns.map((campaign) => (
                    <div
                      key={campaign.id}
                      onClick={() => setSelectedCampaign(campaign)}
                      className="border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 cursor-pointer hover:border-charity-blue-400 transition-colors card-hover"
                    >
                      <img
                        src={campaign.imageUrl}
                        alt={campaign.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-semibold mb-2">{campaign.title}</h3>
                      <div className="space-y-2">
                        <Progress value={getProgressPercentage(campaign.raisedAmount, campaign.targetAmount)} />
                        <div className="flex justify-between text-sm">
                          <span>{formatCurrency(campaign.raisedAmount)} raised</span>
                          <span>{getProgressPercentage(campaign.raisedAmount, campaign.targetAmount).toFixed(0)}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Selected Campaign */}
            {selectedCampaign && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedCampaign.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{selectedCampaign.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedCampaign(null)}
                    className="text-sm"
                  >
                    Change Campaign
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <img
                    src={selectedCampaign.imageUrl}
                    alt={selectedCampaign.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Progress</span>
                        <span className="text-sm font-medium">
                          {getProgressPercentage(selectedCampaign.raisedAmount, selectedCampaign.targetAmount).toFixed(0)}%
                        </span>
                      </div>
                      <Progress value={getProgressPercentage(selectedCampaign.raisedAmount, selectedCampaign.targetAmount)} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-charity-blue-600">
                          {formatCurrency(selectedCampaign.raisedAmount)}
                        </div>
                        <div className="text-sm text-gray-500">Raised</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                          {formatCurrency(selectedCampaign.targetAmount)}
                        </div>
                        <div className="text-sm text-gray-500">Target</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{selectedCampaign.donorCount} donors</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span className="text-sm">{selectedCampaign.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Donation Details</h2>
              <DonationForm selectedCampaign={selectedCampaign} />
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center hover:border-charity-blue-400 transition-colors cursor-pointer"
                  >
                    <method.icon className="h-8 w-8 mx-auto mb-3 text-charity-blue-600" />
                    <h3 className="font-semibold mb-2">{method.name}</h3>
                    <p className="text-sm text-gray-500">{method.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tax Calculator */}
            <TaxCalculator />

            {/* Impact Preview */}
            <ImpactPreview />

            {/* Security Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4">Why CharityFlow is Safe</h3>
              <div className="space-y-4">
                {securityFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-charity-green-600 mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Donations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4">Recent Donations</h3>
              <div className="space-y-3">
                {[
                  { name: 'Anonymous', amount: 5000, time: '2 minutes ago' },
                  { name: 'Ravi Kumar', amount: 2500, time: '15 minutes ago' },
                  { name: 'Priya Singh', amount: 10000, time: '1 hour ago' },
                  { name: 'Anonymous', amount: 1000, time: '2 hours ago' },
                ].map((donation, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{donation.name}</div>
                      <div className="text-sm text-gray-500">{donation.time}</div>
                    </div>
                    <div className="font-bold text-charity-green-600">
                      {formatCurrency(donation.amount)}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}