import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, TrendingUp, Award, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

const impactStories = [
  {
    id: 1,
    title: "Clean Water for 500 Families",
    description: "Thanks to your donations, we installed 5 water purification systems in rural Maharashtra, providing clean drinking water to over 500 families.",
    image: "https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg",
    location: "Maharashtra, India",
    date: "December 2024",
    beneficiaries: 500,
    amount: 250000,
    category: "Water & Sanitation",
    beforeAfter: {
      before: "Families walked 3km daily for contaminated water",
      after: "Clean water available 24/7 in their village"
    }
  },
  {
    id: 2,
    title: "Education Support for 200 Children",
    description: "Your contributions helped provide school supplies, uniforms, and scholarships to 200 underprivileged children in Delhi slums.",
    image: "https://images.pexels.com/photos/8617843/pexels-photo-8617843.jpeg",
    location: "Delhi, India",
    date: "November 2024",
    beneficiaries: 200,
    amount: 180000,
    category: "Education",
    beforeAfter: {
      before: "Children couldn't afford school supplies",
      after: "All children now have books, uniforms, and attend school regularly"
    }
  },
  {
    id: 3,
    title: "Emergency Food Relief",
    description: "During the recent floods, we distributed food packets to 1000+ families, ensuring no one went hungry during the crisis.",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
    location: "Kerala, India",
    date: "October 2024",
    beneficiaries: 1000,
    amount: 150000,
    category: "Emergency Relief",
    beforeAfter: {
      before: "Families stranded without food for days",
      after: "Regular meals provided for 2 weeks during recovery"
    }
  }
]

const impactMetrics = [
  { label: "Lives Transformed", value: "50,000+", icon: Users, color: "text-blue-600" },
  { label: "Meals Provided", value: "2,50,000", icon: Heart, color: "text-red-600" },
  { label: "Children Educated", value: "15,000", icon: Award, color: "text-green-600" },
  { label: "Communities Reached", value: "500+", icon: MapPin, color: "text-purple-600" },
]

export function ImpactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Real Impact Stories</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how your donations are creating real change in people's lives. 
            Every story is verified, every impact is documented.
          </p>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {impactMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center card-hover"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 mb-4`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {metric.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Impact Stories */}
        <div className="space-y-12">
          {impactStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 text-sm mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{story.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{story.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-charity-blue-100 text-charity-blue-800 rounded-full text-sm font-medium">
                      {story.category}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-charity-green-600">
                        ₹{story.amount.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">donated</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {story.description}
                  </p>
                  
                  {/* Before/After */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 dark:text-red-400 mb-2">Before</h4>
                      <p className="text-sm text-red-700 dark:text-red-300">{story.beforeAfter.before}</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">After</h4>
                      <p className="text-sm text-green-700 dark:text-green-300">{story.beforeAfter.after}</p>
                    </div>
                  </div>
                  
                  {/* Impact Numbers */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-charity-blue-600" />
                        <span className="font-semibold">{story.beneficiaries} people helped</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Impact Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Live Impact Feed</h2>
          <div className="space-y-4">
            {[
              { action: "Provided meals", count: 50, location: "Mumbai", time: "2 minutes ago" },
              { action: "Distributed books", count: 25, location: "Delhi", time: "15 minutes ago" },
              { action: "Installed water filter", count: 1, location: "Rajasthan", time: "1 hour ago" },
              { action: "Medical checkup", count: 30, location: "Kerala", time: "2 hours ago" },
            ].map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-charity-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">
                    {update.action} for {update.count} {update.count === 1 ? 'person' : 'people'} in {update.location}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{update.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-charity-blue-600 to-charity-green-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Your Turn to Create Impact</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of donors who are making a real difference. 
            Every donation, no matter the size, creates lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              variant="secondary"
              className="bg-white text-charity-blue-600 hover:bg-gray-100"
            >
              Start Donating
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-charity-blue-600"
            >
              View All Stories
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}