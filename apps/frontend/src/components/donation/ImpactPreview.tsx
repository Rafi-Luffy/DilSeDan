import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, BookOpen, Utensils, Droplets } from 'lucide-react'

const impactData = [
  {
    icon: Utensils,
    title: 'Meals Provided',
    description: '₹50 = 10 nutritious meals for children',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    icon: BookOpen,
    title: 'Education Support',
    description: '₹500 = School supplies for 1 child for 1 month',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: Droplets,
    title: 'Clean Water',
    description: '₹1000 = Clean water access for 5 families for 1 month',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: '₹2000 = Basic medical treatment for 3 patients',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
]

export function ImpactPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
    >
      <div className="flex items-center space-x-2 mb-4">
        <Users className="h-5 w-5 text-charity-blue-600" />
        <h3 className="text-xl font-bold">Your Impact</h3>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
        See how your donation creates real change in people's lives:
      </p>

      <div className="space-y-4">
        {impactData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className={`flex-shrink-0 p-2 rounded-lg ${item.bgColor}`}>
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </div>
            <div>
              <h4 className="font-semibold text-sm">{item.title}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-charity-blue-50 to-charity-green-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
        <div className="text-center">
          <div className="text-2xl font-bold text-charity-blue-600 mb-1">100%</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            of your donation reaches beneficiaries
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
        <p>
          💡 All administrative costs are covered by separate funding sources
        </p>
      </div>
    </motion.div>
  )
}