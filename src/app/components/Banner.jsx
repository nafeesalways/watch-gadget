import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

export default function Banner() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-200 via-pink-200 to-blue-200" />
      
      {/* Decorative floating elements */}
      <div className="absolute top-20 right-[15%] w-32 h-1 bg-white rounded-full rotate-45 opacity-80" />
      <div className="absolute top-32 right-[8%] w-12 h-12 bg-pink-300 rounded opacity-60" />
      <div className="absolute top-[45%] left-[5%] w-16 h-16 bg-blue-300 rounded opacity-60" />
      <div className="absolute bottom-[30%] left-[15%] w-20 h-20 bg-white rounded opacity-60" />
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-24 md:pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              আপনার গার্লফ্রেন্ডকে <br />
              মিডিয়াম বাজেটের একটি <br />
              ঘড়ি গিফট করতে চান <br />
              তাহলে আমাদের ঘড়িটি <br />
              খুবই দারুন
            </h1>
            
            {/* Price */}
            <div className="space-y-2">
              <p className="text-gray-600 text-lg line-through">
                মূল্যঃ ১৯৯৯৯
              </p>
              <p className="text-pink-500 text-4xl md:text-5xl font-bold">
                মূল্যঃ ১৬৫০ টাকা
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link 
                href="#order"
                className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <FaShoppingCart className="text-xl" />
                অর্ডার করুন
              </Link>
              
              <a 
                href="tel:01894844452"
                className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-50 transition-all duration-300"
              >
                01894844452
              </a>
            </div>
          </div>
          
          {/* Right Content - Watch Images */}
          <div className="relative h-100 md:h-125 lg:h-150 z-10">
            {/* Decorative circle background */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-125 h-125 border-4 border-white rounded-full opacity-50" />
            
            {/* Watch images container */}
            <div className="relative h-full flex items-center justify-center">
              <Image 
                src="/images/watches.png" 
                alt="Premium Watches Collection" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white/50 to-transparent" />
    </section>
  )
}
