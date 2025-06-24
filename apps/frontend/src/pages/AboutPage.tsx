import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Users, Globe, Award, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'

const teamMembers = [
  {
    name: 'Arjun Sharma',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    bio: 'Former tech executive with 15 years of experience in fintech and social impact.',
  },
  {
    name: 'Priya Patel',
    role: 'CTO',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
    bio: 'Blockchain expert and former Google engineer passionate about transparency.',
  },
  {
    name: 'Rahul Gupta',
    role: 'Head of Operations',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    bio: 'NGO veteran with 12 years of experience in grassroots development work.',
  },
  {
    name: 'Sneha Reddy',
    role: 'Head of Impact',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
    bio: 'Social worker and researcher focused on measuring and maximizing social impact.',
  },
]

const milestones = [
  { year: '2020', title: 'CharityFlow Founded', description: 'Started with a vision to make charity transparent' },
  { year: '2021', title: 'First Blockchain Integration', description: 'Launched our transparent donation tracking system' },
  { year: '2022', title: '₹1 Crore Milestone', description: 'Reached our first crore in donations processed' },
  { year: '2023', title: '50,000 Lives Impacted', description: 'Directly helped 50,000+ people across India' },
  { year: '2024', title: 'AI-Powered Insights', description: 'Launched AI-driven impact measurement and suggestions' },
]

const values = [
  {
    icon: Shield,
    title: 'Transparency',
    description: 'Every donation is tracked on blockchain with complete visibility into fund usage.',
  },
  {
    icon: Heart,
    title: 'Impact',
    description: 'We measure and maximize the real-world impact of every rupee donated.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a global community of donors, volunteers, and beneficiaries.',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Making charitable giving accessible to everyone, regardless of donation size.',
  },
]

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-charity-blue-50 to-charity-green-50 dark:from-gray-800 dark:to-gray-700 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Revolutionizing</span>
              <br />
              <span className="text-gray-800 dark:text-gray-200">Charitable Giving</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              CharityFlow is India's first blockchain-powered donation platform that ensures 
              complete transparency, maximum impact, and zero corruption in charitable giving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="charity">
                Join Our Mission
              </Button>
              <Button size="xl" variant="outline">
                View Impact Report
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To create a world where every charitable donation creates maximum impact 
                through complete transparency, cutting-edge technology, and community-driven solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We believe that transparency breeds trust, and trust enables generosity. 
                By leveraging blockchain technology and AI-driven insights, we're building 
                the future of charitable giving.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
                alt="Our Mission"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charity-blue-600/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-charity-blue-500 to-charity-green-500 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones in our mission to transform charitable giving
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <div className="text-charity-blue-600 font-bold text-lg mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-charity-blue-600 rounded-full border-4 border-white shadow-lg" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Passionate individuals working to make charity transparent and impactful
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-charity-blue-600 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-charity-blue-600 to-charity-green-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { label: 'Total Donations', value: '₹2.5 Cr+' },
              { label: 'Lives Impacted', value: '50,000+' },
              { label: 'Active Donors', value: '10,000+' },
              { label: 'Partner NGOs', value: '150+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Whether you're a donor, volunteer, or organization, there's a place for you 
              in our community. Together, we can create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="charity">
                Start Donating
              </Button>
              <Button size="xl" variant="outline">
                Become a Volunteer
              </Button>
              <Button size="xl" variant="outline">
                Partner With Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}