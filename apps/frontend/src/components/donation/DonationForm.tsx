import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Heart, User, Mail, MessageSquare, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { useDonationStore } from '@/store/donationStore'
import { generateDonationId, calculateTaxBenefit } from '@/lib/utils'

const donationSchema = z.object({
  amount: z.number().min(50, 'Minimum donation amount is ₹50').max(500000, 'Maximum donation amount is ₹5,00,000'),
  donorName: z.string().min(2, 'Name must be at least 2 characters'),
  donorEmail: z.string().email('Please enter a valid email'),
  message: z.string().optional(),
  isAnonymous: z.boolean(),
  paymentMethod: z.enum(['upi', 'card', 'netbanking']),
})

type DonationFormData = z.infer<typeof donationSchema>

interface DonationFormProps {
  selectedCampaign?: any
}

export function DonationForm({ selectedCampaign }: DonationFormProps) {
  const [showPersonalInfo, setShowPersonalInfo] = useState(true)
  const { addDonation } = useDonationStore()
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amount: 1000,
      isAnonymous: false,
      paymentMethod: 'upi',
    },
  })

  const watchAmount = watch('amount')
  const watchIsAnonymous = watch('isAnonymous')

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000]

  const onSubmit = async (data: DonationFormData) => {
    try {
      const donation = {
        id: generateDonationId(),
        ...data,
        cause: selectedCampaign?.title || 'General Donation',
        timestamp: new Date(),
        status: 'pending' as const,
        taxBenefit: calculateTaxBenefit(data.amount),
      }

      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      addDonation(donation)

      toast({
        title: 'Donation Successful!',
        description: `Thank you for your donation of ₹${data.amount.toLocaleString()}. You will receive a confirmation email shortly.`,
        variant: 'success',
      })

      // Reset form or redirect
    } catch (error) {
      toast({
        title: 'Donation Failed',
        description: 'There was an error processing your donation. Please try again.',
        variant: 'destructive',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Amount Selection */}
      <div>
        <label className="block text-sm font-medium mb-3">Donation Amount</label>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
          {predefinedAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => setValue('amount', amount)}
              className={`p-3 rounded-lg border-2 text-center font-medium transition-all ${
                watchAmount === amount
                  ? 'border-charity-blue-500 bg-charity-blue-50 text-charity-blue-700'
                  : 'border-gray-200 hover:border-charity-blue-300'
              }`}
            >
              ₹{amount.toLocaleString()}
            </button>
          ))}
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
          <input
            type="number"
            {...register('amount', { valueAsNumber: true })}
            className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500 focus:border-transparent"
            placeholder="Enter custom amount"
          />
        </div>
        {errors.amount && (
          <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
        )}
      </div>

      {/* Tax Benefit Display */}
      {watchAmount && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-charity-green-50 border border-charity-green-200 rounded-lg p-4"
        >
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-charity-green-600" />
            <span className="font-medium text-charity-green-800">
              Tax Benefit: You can save ₹{calculateTaxBenefit(watchAmount).toLocaleString()} in taxes (80G)
            </span>
          </div>
        </motion.div>
      )}

      {/* Anonymous Toggle */}
      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => setShowPersonalInfo(!showPersonalInfo)}
            className="text-charity-blue-600 hover:text-charity-blue-700"
          >
            {showPersonalInfo ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
          </button>
          <div>
            <label className="font-medium">Donate Anonymously</label>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Your name won't be shown publicly
            </p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            {...register('isAnonymous')}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-charity-blue-300 dark:peer-focus:ring-charity-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-charity-blue-600"></div>
        </label>
      </div>

      {/* Personal Information */}
      {(showPersonalInfo || !watchIsAnonymous) && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                <User className="inline h-4 w-4 mr-2" />
                Full Name
              </label>
              <input
                type="text"
                {...register('donorName')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
              {errors.donorName && (
                <p className="text-red-500 text-sm mt-1">{errors.donorName.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                <Mail className="inline h-4 w-4 mr-2" />
                Email Address
              </label>
              <input
                type="email"
                {...register('donorEmail')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
              {errors.donorEmail && (
                <p className="text-red-500 text-sm mt-1">{errors.donorEmail.message}</p>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-2">
          <MessageSquare className="inline h-4 w-4 mr-2" />
          Message (Optional)
        </label>
        <textarea
          {...register('message')}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-blue-500 focus:border-transparent resize-none"
          placeholder="Share why you're donating or leave a message of support..."
        />
      </div>

      {/* Payment Method */}
      <div>
        <label className="block text-sm font-medium mb-3">Payment Method</label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: 'upi', name: 'UPI', description: 'PhonePe, Google Pay' },
            { id: 'card', name: 'Card', description: 'Credit/Debit Card' },
            { id: 'netbanking', name: 'Net Banking', description: 'All Banks' },
          ].map((method) => (
            <label
              key={method.id}
              className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all ${
                watch('paymentMethod') === method.id
                  ? 'border-charity-blue-500 bg-charity-blue-50'
                  : 'border-gray-200 hover:border-charity-blue-300'
              }`}
            >
              <input
                type="radio"
                {...register('paymentMethod')}
                value={method.id}
                className="sr-only"
              />
              <span className="font-medium">{method.name}</span>
              <span className="text-sm text-gray-500">{method.description}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="xl"
        variant="charity"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Processing...' : `Donate ₹${watchAmount?.toLocaleString() || '0'}`}
      </Button>

      {/* Security Note */}
      <div className="text-center text-sm text-gray-600 dark:text-gray-300">
        <p>🔒 Your donation is secured by 256-bit SSL encryption and blockchain technology</p>
      </div>
    </form>
  )
}