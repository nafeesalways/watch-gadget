import { FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative w-full bg-gray-100 border-t border-gray-200">
      
      {/* Top Section - Address and Links */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left - Address */}
          <div className="flex items-center gap-2 text-gray-700">
            <FaMapMarkerAlt className="text-gray-600 text-lg shrink-0" />
            <span className="text-sm md:text-base">
              Kuril, Vatara, Dhaka-1229, Bangladesh
            </span>
          </div>

          {/* Right - Links */}
          <div className="flex items-center gap-6 md:gap-8">
            <Link 
              href="/privacy-policy" 
              className="text-sm md:text-base text-gray-700 hover:text-purple-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-conditions" 
              className="text-sm md:text-base text-gray-700 hover:text-purple-600 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <p className="text-center text-sm md:text-base text-gray-600">
            © 2026 All Rights Reserved Designed by{' '}
            <Link 
              href="https://funnelliner.com" 
              target="_blank"
              className="font-semibold text-gray-800 hover:text-purple-600 transition-colors"
            >
              Funnel Liner
            </Link>
          </p>
        </div>
      </div>

    </footer>
  )
}
