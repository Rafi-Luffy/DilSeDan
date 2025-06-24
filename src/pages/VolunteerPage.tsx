import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Calendar, MapPin, Clock, Heart, Award, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const volunteerOpportunities = [
  {
    id: 1,
    title: 'Food Distribution Drive',
    description: 'Help distribute meals to homeless individuals in Mumbai',
    location: 'Mumbai, Maharashtra',
    date: '2024-01-20',
    time: '10:00 AM - 2:00 PM',
    volunteers: 15,
    maxVolunteers: 25,
    skills: ['Physical Work', 'Communication'],
    category: 'Food & Nutrition',
    urgent: true,
  },
  {
    id: 2,
    title: 'Teaching Assistant',
    description: 'Assist teachers in rural schools with basic education',
    location: 'Pune, Maharashtra',
    date: '2024-01-22',
    time: '9:00 AM - 3:00 PM',
    volunteers: 8,
    maxVolunteers: 12,
    skills: ['Teaching', 'Patience', 'Hindi/English'],
    category: 'Education',
    urgent: false,
  },
  {
    id: 3,
    title: 'Medical Camp Support',
    description: 'Support medical professionals during health checkup camps',
    location: 'Delhi NCR',
    date: '2024-01-25',
    time: '8:00 AM - 4:00 PM',
    volunteers: 12,
    maxVolunteers: 20,
    skills: ['Medical Background', 'Organization'],
    category: 'Healthcare',
    urgent: false,
  },
  {
    id: 4,
    title: 'Digital Literacy Training',
    description: 'Teach basic computer skills to elderly citizens',
    location: 'Bangalore, Karnataka',
    date: '2024-01-27',
    time: '2:00 PM - 6:00 PM',
    volunteers: 5,
    maxVolunteers: 10,
    skills: ['Computer Skills', 'Teaching', 'Patience'],
    category: 'Digital Literacy',
    urgent: false,
  },
]

const volunteerBenefits = [
  {
    icon: Heart,
    title: 'Make Real Impact',
    description: 'Directly contribute to positive change in communities',
  },
  {
    icon: Users,
    title: 'Meet Like-minded People',
    description: 'Connect with passionate individuals who share your values',
  },
  {
    icon: Award,
    title: 'Gain Experience',
    description: 'Develop new skills and gain valuable experience',
  },
  {
    icon: CheckCircle,
    title: 'Verified Certificates',
    description: 'Receive certificates for your volunteer contributions',
  },
]

export function VolunteerPage() {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null)
  const [showSignupForm, setShowSignupForm] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Become a Volunteer</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our community of passionate volunteers and make a real difference in people's lives. 
            Every hour you contribute creates lasting impact.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {volunteerBenefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center card-hover"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-charity-blue-100 dark:bg-charity-blue-900 rounded-full mb-4">
                <benefit.icon className="h-6 w-6 text-charity-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Volunteer Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Current Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-charity-blue-100 text-charity-blue-800 rounded-full text-sm font-medium">
                      {opportunity.category}
                    </span>
                    {opportunity.urgent && (
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                        Urgent
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{opportunity.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>{new Date(opportunity.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{opportunity.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span>{opportunity.volunteers}/{opportunity.maxVolunteers} volunteers</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">Required Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="charity"
                    className="flex-1"
                    onClick={() => {
                      setSelectedOpportunity(opportunity)
                      setShowSignupForm(true)
                    }}
                  >
                    Apply Now
                  </Button>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center bg-gradient-to-r from-charity-blue-600 to-charity-green-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Can't Find the Right Opportunity?</h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for passionate volunteers. Let us know your interests 
            and we'll match you with the perfect opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              variant="secondary"
              className="bg-white text-charity-blue-600 hover:bg-gray-100"
            >
              General Volunteer Signup
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-charity-blue-600"
            >
              Create Custom Opportunity
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}