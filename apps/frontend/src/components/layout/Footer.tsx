import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-charity-blue-500 to-charity-green-500">
                <Heart className="h-5 w-5 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-bold text-white">CharityFlow</span>
            </div>
            <p className="text-sm text-gray-400">
              Transparent charity donations powered by blockchain technology. 
              Every rupee is tracked, every impact is verified.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-charity-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-charity-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-charity-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-charity-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/campaigns" className="hover:text-charity-blue-400 transition-colors">Campaigns</Link></li>
              <li><Link to="/impact" className="hover:text-charity-blue-400 transition-colors">Impact Stories</Link></li>
              <li><Link to="/transparency" className="hover:text-charity-blue-400 transition-colors">Transparency</Link></li>
              <li><Link to="/volunteer" className="hover:text-charity-blue-400 transition-colors">Volunteer</Link></li>
              <li><Link to="/dashboard" className="hover:text-charity-blue-400 transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-charity-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-charity-blue-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-charity-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-charity-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-charity-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-charity-blue-400" />
                <span className="text-sm">support@charityflow.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-charity-blue-400" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-charity-blue-400" />
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 CharityFlow. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">Secured by blockchain</span>
              <div className="w-2 h-2 bg-charity-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}