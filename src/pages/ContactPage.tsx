import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@charityflow.org',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      description: 'Mon-Fri from 9am to 6pm',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Mumbai, Maharashtra, India',
      description: 'Come say hello at our office',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon-Fri: 9am-6pm',
      description: 'Saturday: 10am-4pm',
    },
  ]

  const faqs = [
    {
      question: 'How do I track my donation?',
      answer: 'Every donation gets a unique blockchain transaction ID. You can track it in your dashboard or on our transparency page.',
    },
    {
      question: 'Is my donation tax deductible?',
      answer: 'Yes! All donations are eligible for 50% tax deduction under Section 80G of the Income Tax Act.',
    },
    {
      question: 'How do I know my money is being used properly?',
      answer: 'We use blockchain technology to track every rupee. You can see exactly how your donation is used with photo/video proof.',
    },
    {
      question: 'Can I donate anonymously?',
      answer: 'Absolutely! You can choose to donate anonymously and your name won\'t be displayed publicly.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept UPI, credit/debit cards, net banking, and all major digital payment methods.',
    },
    {
      question: 'How do I become a volunteer?',
      answer: 'Visit our volunteer page to sign up. We have opportunities for both online and offline volunteering.',
    },
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
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500 focus:border-transparent">
                    <option value="">Select a subject</option>
                    <option value="donation">Donation Support</option>
                    <option value="technical">Technical Issue</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  size="xl"
                  variant="charity"
                  className="w-full"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-charity-blue-100 dark:bg-charity-blue-900 rounded-full">
                      <info.icon className="h-5 w-5 text-charity-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-charity-blue-600 font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Live Chat Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Help Center
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Report an Issue
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Partnership Inquiry
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-semibold text-charity-blue-600">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-charity-blue-600 mx-auto mb-4" />
              <p className="text-lg font-semibold">CharityFlow Headquarters</p>
              <p className="text-gray-600 dark:text-gray-400">Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}