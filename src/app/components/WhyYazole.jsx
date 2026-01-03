import { FaShoppingCart } from 'react-icons/fa'

export default function WhyYazole() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-linear-to-b from-white to-gray-50 overflow-hidden">junior developer
      
      {/* Decorative Background Elements - Left Side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-30">
        {/* Halftone dots pattern */}
        <div className="absolute inset-0 bg-linear-to-r from-purple-200 to-transparent"
             style={{
               backgroundImage: `radial-gradient(circle, rgba(147, 51, 234, 0.3) 2px, transparent 2px)`,
               backgroundSize: '20px 20px'
             }}
        />
      </div>

      {/* Decorative shapes scattered around */}
      <DecorativeShapes />

      {/* Main Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Heading with decorative line */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-pink-500">আমাদের YAZOLE ঘড়ি</span>{' '}
            <span className="text-purple-500">গুলো কেন</span>{' '}
            <span className="text-blue-500">নিবেন আপনারা</span>
          </h2>
          
          {/* Decorative underline with circles */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-3 h-3 rounded-full border-2 border-pink-400" />
            <div className="w-32 md:w-48 h-1 bg-linear-to-r from-pink-400 to-purple-400 rounded-full" />
            <div className="w-3 h-3 rounded-full border-2 border-purple-400" />
          </div>
        </div>

        {/* Description Text */}
        <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed px-4">
            আমরা চীনের শীর্ষস্থানীয় ফ্যাশন মহিলা ঘড়ি নির্মাতারা এবং সরবরাহকারীদের একজন হিসাবে সুপরিচিত। আমাদের কারখানাটি প্রতিযোগিতামূলক দামের সাথে চীনায় তৈরি কাস্টমাইজড ফ্যাশন মহিলাদের ঘড়ি সরবরাহ করে। পাইকারি পরিষেবার জন্য আমাদের সাথে যোগাযোগ করতে স্বাগতম। লেডিস ঘড়ি ডিজাইন আপনি যদি আপনার গার্লফ্রেন্ডকে মিডিয়াম বাজেটের একটি ঘড়ি গিফট করতে চান তাহলে আমাদের ঘড়িটি খুবই দারুণ। অত্যন্ত সাশ্রয়ী দামে এই ঘড়িটি আপনি কিন্তু আপনার গার্লফ্রেন্ডকে গিফট করতে পারেন। ঘড়িটি মহিলাদের জন্য পুরোপুরি মানানসই। ঘড়ির কেস স্টেইনলেস স্টিলের তৈরি। ঘড়িটির পুরুত্ব এবং ব্যাস মানক। ঘড়িটি আধুনিক নারীদের জন্য তৈরি করা হয়েছে যারা ভদ্রতা এবং ইলানের সাথে ভূমিকা অতিক্রম করে
          </p>
        </div>

        {/* Price and CTA Section */}
        <div className="text-center space-y-6">
          {/* Price */}
          <div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-500">
              মূল্যঃ ১৬৫০ টাকা
            </h3>
            <p className="text-gray-600 text-lg md:text-xl mt-2">
              সরাসরি অর্ডার করতে পারেন আমাদের অনলাইন শপ থেকে
            </p>
          </div>

          {/* Order Button */}
          <div className="flex justify-center">
            <button className="bg-linear-to-r from-pink-500 to-blue-500 text-white px-10 md:px-16 py-4 md:py-5 rounded-lg font-bold text-xl md:text-2xl flex items-center gap-3 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-blue-600">
              <FaShoppingCart className="text-2xl" />
              অর্ডার করুন
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

// Decorative shapes component
function DecorativeShapes() {
  return (
    <>
      {/* Top left area */}
      <div className="absolute top-10 left-[10%] w-12 h-1 bg-purple-300 rotate-45 opacity-70" />
      <div className="absolute top-20 left-[15%] w-6 h-6 rounded-full border-2 border-purple-300 opacity-60" />
      <div className="absolute top-8 left-[25%] w-2 h-2 rounded-full bg-blue-400 opacity-70" />
      
      {/* Top right area */}
      <div className="absolute top-12 right-[15%] w-16 h-1 bg-purple-300 rotate-30 opacity-70" />
      <div className="absolute top-24 right-[8%] w-10 h-10 border-2 border-yellow-300 rotate-45 opacity-60" />
      <div className="absolute top-4 right-[20%] w-8 h-8 rounded-full border-2 border-purple-300 opacity-60" />
      <div className="absolute top-28 right-[25%] w-2 h-2 rounded-full bg-pink-400 opacity-70" />
      
      {/* Middle left */}
      <div className="absolute top-[40%] left-[8%]">
        <svg width="60" height="30" viewBox="0 0 60 30" className="opacity-60">
          <path d="M 5 15 Q 15 5, 25 15 T 45 15" stroke="#fbbf24" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      <div className="absolute top-[45%] left-[4%] w-3 h-3 rounded-full border-2 border-yellow-300 opacity-60" />
      
      {/* Middle right */}
      <div className="absolute top-[35%] right-[10%]">
        <svg width="60" height="40" viewBox="0 0 60 40" className="opacity-60">
          <path d="M 10 20 Q 20 5, 30 20 T 50 20" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      
      {/* Bottom left */}
      <div className="absolute bottom-[25%] left-[12%] w-14 h-1 bg-pink-300 -rotate-45 opacity-70" />
      <div className="absolute bottom-[20%] left-[8%] w-2 h-2 rounded-full bg-purple-400 opacity-70" />
      <div className="absolute bottom-[30%] left-[18%]">
        <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-50">
          <polygon points="20,10 40,30 20,50 10,30" fill="none" stroke="#ec4899" strokeWidth="2"/>
          <line x1="20" y1="10" x2="30" y2="20" stroke="#ec4899" strokeWidth="2"/>
        </svg>
      </div>
      <div className="absolute bottom-[18%] left-[6%]">
        <svg width="40" height="20" viewBox="0 0 40 20" className="opacity-60">
          <path d="M 5 10 Q 10 5, 15 10 Q 20 15, 25 10" stroke="#6366f1" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      
      {/* Bottom right */}
      <div className="absolute bottom-[28%] right-[12%] w-16 h-1 bg-pink-300 rotate-25 opacity-70" />
      <div className="absolute bottom-[20%] right-[8%] w-2 h-2 rounded-full bg-pink-400 opacity-70" />
      <div className="absolute bottom-[35%] right-[18%] w-6 h-6 rounded-full border-2 border-yellow-300 opacity-60" />
      <div className="absolute bottom-[22%] right-[15%]">
        <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-60">
          <circle cx="30" cy="30" r="15" fill="none" stroke="#8b5cf6" strokeWidth="2"/>
          <path d="M 30 15 Q 35 25, 30 35 Q 25 30, 30 25" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      
      {/* Center scattered dots */}
      <div className="absolute top-[50%] left-[35%] w-2 h-2 rounded-full bg-blue-300 opacity-60" />
      <div className="absolute top-[55%] right-[40%] w-2 h-2 rounded-full bg-yellow-300 opacity-60" />
      <div className="absolute bottom-[45%] left-[45%] w-2 h-2 rounded-full bg-pink-300 opacity-60" />
    </>
  )
}
