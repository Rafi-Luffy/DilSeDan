import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { Heart, Shield, Clock, Users, CreditCard, Smartphone, Building2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useDonationStore } from '@/store/donationStore'
import { formatCurrency, getProgressPercentage } from '@/lib/utils'

export function DonatePage() {
  const [searchParams] = useSearchParams()
  const campaignId = searchParams.get('campaign')
  const { campaigns, getCampaignById } = useDonationStore()
  const [selectedCampaign, setSelectedCampaign] = useState(null)
  const [donationAmount, setDonationAmount] = useState(1000)
  const [donorName, setDonorName] = useState('')
  const [donorEmail, setDonorEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(false)

  useEffect(() => {
    if (campaignId) {
      const campaign = getCampaignById(campaignId)
      setSelectedCampaign(campaign)
    }
  }, [campaignId, getCampaignById])

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000]

  const paymentMethods = [
    { 
      id: 'upi', 
      name: 'UPI', 
      icon: Smartphone, 
      description: 'PhonePe, Google Pay, Paytm',
      popular: true
    },
    { 
      id: 'card', 
      name: 'Card', 
      icon: CreditCard, 
      description: 'Credit/Debit Card' 
    },
    { 
      id: 'netbanking', 
      name: 'Net Banking', 
      icon: Building2, 
      description: 'All Indian banks' 
    },
  ]

  const impactCalculator = (amount) => {
    return {
      meals: Math.floor(amount / 50) * 10,
      books: Math.floor(amount / 200),
      medicine: Math.floor(amount / 300),
      water: Math.floor(amount / 1000) * 5
    }
  }

  const impact = impactCalculator(donationAmount)

  return (
    <div className="min-h-screen bg-warm-cream py-8">
      <div className="container mx-auto px-4">
        {/* Emotional Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-handwritten font-bold text-warm-charcoal mb-4 transform -rotate-1">
            Your Heart, Their Hope 💝
          </h1>
          <p className="text-xl text-warm-charcoal-light max-w-2xl mx-auto">
            Every rupee you donate is a ray of hope. Let's create magic together!
          </p>
          
          {/* Hand-drawn heart */}
          <svg className="mx-auto mt-6" width="60" height="60" viewBox="0 0 60 60">
            <path 
              d="M30,50 C30,50 10,35 10,20 C10,15 15,10 20,10 C25,10 30,15 30,20 C30,15 35,10 40,10 C45,10 50,15 50,20 C50,35 30,50 30,50 Z" 
              fill="#ff9a00" 
              className="animate-heart-beat"
            />
          </svg>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Donation Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Campaign Selection */}
            {!selectedCampaign && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="warm-card"
              >
                <h2 className="text-2xl font-handwritten font-bold text-warm-charcoal mb-6 transform -rotate-1">
                  Choose a Story to Support 📖
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {campaigns.map((campaign, index) => (
                    <motion.div
                      key={campaign.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedCampaign(campaign)}
                      className="border-2 border-warm-orange/30 rounded-2xl p-4 cursor-pointer hover:border-warm-orange hover:shadow-handmade transition-all duration-300 transform hover:-translate-y-1 hover:rotate-1"
                    >
                      <img
                        src={campaign.imageUrl}
                        alt={campaign.title}
                        className="w-full h-32 object-cover rounded-xl mb-3"
                      />
                      <h3 className="font-handwritten font-bold text-warm-charcoal mb-2">{campaign.title}</h3>
                      <div className="space-y-2">
                        <Progress 
                          value={getProgressPercentage(campaign.raisedAmount, campaign.targetAmount)} 
                          variant="handmade"
                        />
                        <div className="flex justify-between text-sm font-handwritten">
                          <span>{formatCurrency(campaign.raisedAmount)} raised</span>
                          <span>{getProgressPercentage(campaign.raisedAmount, campaign.targetAmount).toFixed(0)}% done!</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Selected Campaign Display */}
            {selectedCampaign && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="warm-card"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-handwritten font-bold text-warm-charcoal mb-2 transform -rotate-1">
                      {selectedCampaign.title} ❤️
                    </h2>
                    <p className="text-warm-charcoal-light">{selectedCampaign.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedCampaign(null)}
                    className="text-sm font-handwritten text-warm-orange hover:text-warm-orange-dark"
                  >
                    Change Story
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={selectedCampaign.imageUrl}
                      alt={selectedCampaign.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-handwritten text-warm-orange font-bold">
                        📍 {selectedCampaign.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-handwritten text-warm-charcoal">Progress</span>
                        <span className="text-sm font-handwritten font-bold text-warm-green">
                          {getProgressPercentage(selectedCampaign.raisedAmount, selectedCampaign.targetAmount).toFixed(0)}% complete! 🎉
                        </span>
                      </div>
                      <Progress 
                        value={getProgressPercentage(selectedCampaign.raisedAmount, selectedCampaign.targetAmount)} 
                        variant="handmade"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-warm-green/10 rounded-xl">
                        <div className="text-2xl font-handwritten font-bold text-warm-green">
                          {formatCurrency(selectedCampaign.raisedAmount)}
                        </div>
                        <div className="text-sm text-warm-charcoal-light">Raised</div>
                      </div>
                      <div className="text-center p-3 bg-warm-orange/10 rounded-xl">
                        <div className="text-2xl font-handwritten font-bold text-warm-orange">
                          {selectedCampaign.donorCount}
                        </div>
                        <div className="text-sm text-warm-charcoal-light">Kind Hearts</div>
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
              transition={{ delay: 0.2 }}
              className="warm-card"
            >
              <h2 className="text-2xl font-handwritten font-bold text-warm-charcoal mb-6 transform rotate-1">
                How Much Love to Share? 💕
              </h2>
              
              <div className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-handwritten font-medium text-warm-charcoal mb-3">
                    Choose Amount (₹)
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                    {predefinedAmounts.map((amount, index) => (
                      <motion.button
                        key={amount}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        type="button"
                        onClick={() => setDonationAmount(amount)}
                        className={`p-3 rounded-xl border-2 text-center font-handwritten font-bold transition-all duration-300 transform hover:scale-105 hover:rotate-2 ${
                          donationAmount === amount
                            ? 'border-warm-orange bg-warm-orange text-white shadow-handmade'
                            : 'border-warm-orange/30 hover:border-warm-orange text-warm-charcoal hover:bg-warm-orange/10'
                        }`}
                      >
                        ₹{amount.toLocaleString()}
                      </motion.button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-warm-charcoal font-handwritten font-bold text-lg">₹</span>
                    <input
                      type="number"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(Number(e.target.value))}
                      className="w-full pl-12 pr-4 py-4 border-2 border-warm-orange/30 rounded-xl focus:border-warm-orange focus:outline-none font-handwritten text-lg bg-white/50"
                      placeholder="Enter custom amount"
                      min="50"
                    />
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-handwritten font-medium text-warm-charcoal mb-2">
                      Your Beautiful Name 😊
                    </label>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-warm-green/30 rounded-xl focus:border-warm-green focus:outline-none font-handwritten bg-white/50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-handwritten font-medium text-warm-charcoal mb-2">
                      Email Address 📧
                    </label>
                    <input
                      type="email"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-warm-blue/30 rounded-xl focus:border-warm-blue focus:outline-none font-handwritten bg-white/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-handwritten font-medium text-warm-charcoal mb-2">
                    Leave a Message of Love 💌 (Optional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-warm-golden/30 rounded-xl focus:border-warm-golden focus:outline-none font-handwritten bg-white/50 resize-none"
                    placeholder="Share why you're donating or leave a message of hope..."
                  />
                </div>

                {/* Anonymous Option */}
                <div className="flex items-center space-x-3 p-4 bg-warm-sage/10 rounded-xl">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-5 h-5 text-warm-orange focus:ring-warm-orange border-warm-orange/30 rounded"
                  />
                  <label htmlFor="anonymous" className="font-handwritten text-warm-charcoal">
                    Donate anonymously (your name won't be shown publicly) 🤫
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  variant="handmade"
                  size="handmade"
                  className="w-full text-lg font-handwritten font-bold transform hover:scale-105 hover:rotate-1"
                >
                  <Heart className="mr-3 h-5 w-5 animate-heart-beat" fill="currentColor" />
                  Donate ₹{donationAmount.toLocaleString()} with Love
                </Button>
              </div>
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="warm-card"
            >
              <h2 className="text-2xl font-handwritten font-bold text-warm-charcoal mb-6 transform -rotate-1">
                Choose Payment Method 💳
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {paymentMethods.map((method, index) => (
                  <motion.div
                    key={method.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative border-2 border-warm-orange/30 rounded-xl p-6 text-center hover:border-warm-orange hover:shadow-handmade transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:rotate-1 group"
                  >
                    {method.popular && (
                      <div className="absolute -top-2 -right-2 bg-warm-orange text-white px-2 py-1 rounded-full text-xs font-handwritten font-bold">
                        Popular! ⭐
                      </div>
                    )}
                    <method.icon className="h-8 w-8 mx-auto mb-3 text-warm-orange group-hover:animate-bounce-gentle" />
                    <h3 className="font-handwritten font-bold text-warm-charcoal mb-2">{method.name}</h3>
                    <p className="text-sm text-warm-charcoal-light">{method.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Impact Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="warm-card"
            >
              <h3 className="text-xl font-handwritten font-bold text-warm-charcoal mb-4 transform rotate-1">
                Your ₹{donationAmount.toLocaleString()} Will Create Magic! ✨
              </h3>
              
              <div className="space-y-4">
                {impact.meals > 0 && (
                  <div className="flex items-center space-x-3 p-3 bg-warm-orange/10 rounded-xl">
                    <div className="text-2xl">🍽️</div>
                    <div>
                      <div className="font-handwritten font-bold text-warm-orange">{impact.meals} meals</div>
                      <div className="text-sm text-warm-charcoal-light">for hungry children</div>
                    </div>
                  </div>
                )}
                
                {impact.books > 0 && (
                  <div className="flex items-center space-x-3 p-3 bg-warm-blue/10 rounded-xl">
                    <div className="text-2xl">📚</div>
                    <div>
                      <div className="font-handwritten font-bold text-warm-blue">{impact.books} books</div>
                      <div className="text-sm text-warm-charcoal-light">for education</div>
                    </div>
                  </div>
                )}
                
                {impact.medicine > 0 && (
                  <div className="flex items-center space-x-3 p-3 bg-warm-green/10 rounded-xl">
                    <div className="text-2xl">💊</div>
                    <div>
                      <div className="font-handwritten font-bold text-warm-green">{impact.medicine} medicines</div>
                      <div className="text-sm text-warm-charcoal-light">for health</div>
                    </div>
                  </div>
                )}
                
                {impact.water > 0 && (
                  <div className="flex items-center space-x-3 p-3 bg-warm-sage/10 rounded-xl">
                    <div className="text-2xl">💧</div>
                    <div>
                      <div className="font-handwritten font-bold text-warm-sage">{impact.water} families</div>
                      <div className="text-sm text-warm-charcoal-light">get clean water</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-warm-orange/20 to-warm-green/20 rounded-xl text-center">
                <div className="text-2xl font-handwritten font-bold text-warm-charcoal mb-1">100%</div>
                <div className="text-sm text-warm-charcoal-light font-handwritten">
                  of your donation reaches those in need ❤️
                </div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="warm-card"
            >
              <h3 className="text-xl font-handwritten font-bold text-warm-charcoal mb-4 transform -rotate-1">
                Why Trust Us? 🤝
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🔗</div>
                  <div>
                    <h4 className="font-handwritten font-bold text-warm-charcoal">Blockchain Secured</h4>
                    <p className="text-sm text-warm-charcoal-light">Every transaction is recorded transparently</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">📸</div>
                  <div>
                    <h4 className="font-handwritten font-bold text-warm-charcoal">Photo Proof</h4>
                    <p className="text-sm text-warm-charcoal-light">See exactly how your money helped</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">❤️</div>
                  <div>
                    <h4 className="font-handwritten font-bold text-warm-charcoal">Made with Love</h4>
                    <p className="text-sm text-warm-charcoal-light">By Indians who care deeply</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recent Donations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="warm-card"
            >
              <h3 className="text-xl font-handwritten font-bold text-warm-charcoal mb-4 transform rotate-1">
                Recent Acts of Kindness 💝
              </h3>
              
              <div className="space-y-3">
                {[
                  { name: 'Priya from Mumbai', amount: 2500, time: '2 minutes ago', message: 'For education' },
                  { name: 'Anonymous', amount: 5000, time: '15 minutes ago', message: 'Hope this helps!' },
                  { name: 'Rahul from Delhi', amount: 1000, time: '1 hour ago', message: 'Small contribution' },
                  { name: 'Sneha from Pune', amount: 3000, time: '2 hours ago', message: 'For the children' },
                ].map((donation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-white/50 rounded-xl"
                  >
                    <div>
                      <div className="font-handwritten font-bold text-warm-charcoal">{donation.name}</div>
                      <div className="text-sm text-warm-charcoal-light">"{donation.message}"</div>
                      <div className="text-xs text-warm-charcoal-light">{donation.time}</div>
                    </div>
                    <div className="font-handwritten font-bold text-warm-green">
                      ₹{donation.amount.toLocaleString()}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}