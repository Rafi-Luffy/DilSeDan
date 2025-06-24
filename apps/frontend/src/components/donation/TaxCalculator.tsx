import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, FileText, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { calculateTaxBenefit } from '@/lib/utils'

export function TaxCalculator() {
  const [donationAmount, setDonationAmount] = useState(1000)
  const [annualIncome, setAnnualIncome] = useState(500000)

  const taxBenefit = calculateTaxBenefit(donationAmount)
  const taxSavingPercentage = (taxBenefit / donationAmount) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-charity-green-50 to-charity-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-6"
    >
      <div className="flex items-center space-x-2 mb-4">
        <Calculator className="h-5 w-5 text-charity-green-600" />
        <h3 className="text-xl font-bold">Tax Benefit Calculator</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Donation Amount</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-green-500 focus:border-transparent"
              min="50"
              max="500000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Annual Income</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
            <input
              type="number"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charity-green-500 focus:border-transparent"
              min="0"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">Tax Benefit (80G)</span>
            <span className="font-bold text-charity-green-600">₹{taxBenefit.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">Effective Cost</span>
            <span className="font-bold text-gray-900 dark:text-white">
              ₹{(donationAmount - taxBenefit).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">Tax Saving %</span>
            <span className="font-bold text-charity-blue-600">{taxSavingPercentage.toFixed(0)}%</span>
          </div>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
          <p>
            * Under Section 80G of the Income Tax Act, donations are eligible for 50% deduction.
            This is an estimate. Please consult a tax advisor for accurate calculations.
          </p>
        </div>

        <Button variant="outline" size="sm" className="w-full">
          <FileText className="h-4 w-4 mr-2" />
          Generate Tax Report
        </Button>
      </div>
    </motion.div>
  )
}