import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa'

export default function PriceCTA() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-linear-to-b from-pink-50 to-white overflow-hidden">
      
      {/* Left Watch Image - Low Opacity */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 opacity-10 pointer-events-none">
        <Image 
          src="/images/img2.png"
          alt="Watch Background Left"
          fill
          className="object-contain"
        />
      </div>

      {/* Right Watch Image - Low Opacity */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 opacity-10 pointer-events-none">
        <Image 
          src="/images/img3.png"
          alt="Watch Background Right"
          fill
          className="object-contain"
        />
      </div>

      {/* Center Content */}
      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center z-10">
        
        {/* Price */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-500 mb-4 md:mb-6">
          মূল্যঃ ১৬৫০ টাকা
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-6 md:mb-8">
          সরাসরি অর্ডার করতে পারেন আমাদের অনলাইন শপ থেকে।
        </p>

        {/* Order Button */}
        <button className="bg-linear-to-r from-pink-500 to-blue-500 text-white px-10 md:px-16 py-4 md:py-5 rounded-lg font-bold text-xl md:text-2xl flex items-center justify-center gap-3 mx-auto hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-blue-600">
          <FaShoppingCart className="text-2xl" />
          অর্ডার করুন
        </button>

      </div>

    </section>
  )
}
