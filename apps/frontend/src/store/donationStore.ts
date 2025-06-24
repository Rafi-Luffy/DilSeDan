import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Donation {
  id: string
  amount: number
  cause: string
  donorName: string
  donorEmail: string
  message?: string
  isAnonymous: boolean
  timestamp: Date
  status: 'pending' | 'completed' | 'failed'
  paymentMethod: 'upi' | 'card' | 'netbanking'
  transactionId?: string
  taxBenefit?: number
}

export interface Campaign {
  id: string
  title: string
  description: string
  category: string
  targetAmount: number
  raisedAmount: number
  donorCount: number
  imageUrl: string
  isUrgent: boolean
  endDate?: Date
  location: string
}

interface DonationState {
  donations: Donation[]
  campaigns: Campaign[]
  totalDonated: number
  totalImpact: number
  addDonation: (donation: Donation) => void
  updateDonationStatus: (id: string, status: Donation['status']) => void
  getCampaignById: (id: string) => Campaign | undefined
  addCampaign: (campaign: Campaign) => void
  updateCampaign: (id: string, updates: Partial<Campaign>) => void
}

export const useDonationStore = create<DonationState>()(
  persist(
    (set, get) => ({
      donations: [],
      campaigns: [
        {
          id: '1',
          title: 'Education for Underprivileged Children',
          description: 'Help provide quality education and school supplies to children in rural areas.',
          category: 'Education',
          targetAmount: 500000,
          raisedAmount: 350000,
          donorCount: 234,
          imageUrl: 'https://images.pexels.com/photos/8617843/pexels-photo-8617843.jpeg',
          isUrgent: false,
          location: 'Rural Rajasthan',
        },
        {
          id: '2',
          title: 'Emergency Food Relief',
          description: 'Provide immediate food assistance to families affected by natural disasters.',
          category: 'Food & Nutrition',
          targetAmount: 200000,
          raisedAmount: 180000,
          donorCount: 156,
          imageUrl: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
          isUrgent: true,
          location: 'Flood-affected Kerala',
        },
        {
          id: '3',
          title: 'Clean Water Initiative',
          description: 'Install water purification systems and build wells in water-scarce regions.',
          category: 'Water & Sanitation',
          targetAmount: 750000,
          raisedAmount: 420000,
          donorCount: 289,
          imageUrl: 'https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg',
          isUrgent: false,
          location: 'Drought-hit Maharashtra',
        },
      ],
      totalDonated: 0,
      totalImpact: 0,
      addDonation: (donation) =>
        set((state) => ({
          donations: [...state.donations, donation],
          totalDonated: state.totalDonated + donation.amount,
        })),
      updateDonationStatus: (id, status) =>
        set((state) => ({
          donations: state.donations.map((donation) =>
            donation.id === id ? { ...donation, status } : donation
          ),
        })),
      getCampaignById: (id) => get().campaigns.find((campaign) => campaign.id === id),
      addCampaign: (campaign) =>
        set((state) => ({
          campaigns: [...state.campaigns, campaign],
        })),
      updateCampaign: (id, updates) =>
        set((state) => ({
          campaigns: state.campaigns.map((campaign) =>
            campaign.id === id ? { ...campaign, ...updates } : campaign
          ),
        })),
    }),
    {
      name: 'donation-storage',
    }
  )
)