import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Virat Kohli',
      avatar: '/images/avatar-1.png',
      rating: 5,
      review: 'অসাধারণ মানের ঘড়ি! ডিজাইন খুবই সুন্দর এবং দাম অনুযায়ী পারফেক্ট। আমার গার্লফ্রেন্ড খুব খুশি হয়েছে।',
      bgColor: 'from-blue-300 to-blue-400'
    },
    {
      id: 2,
      name: 'The Fizz',
      avatar: '/images/avatar-2.png',
      rating: 5,
      review: 'প্রোডাক্ট কোয়ালিটি অনেক ভালো। ঠিক ছবির মতোই পেয়েছি। ডেলিভারি ও দ্রুত ছিল। অবশ্যই রিকমেন্ড করব।',
      bgColor: 'from-yellow-300 to-yellow-400'
    },
    {
      id: 3,
      name: 'Mitchell Starc',
      avatar: '/images/avatar-3.png',
      rating: 4,
      review: 'দাম অনুযায়ী ভালো প্রোডাক্ট। প্যাকেজিং ভালো ছিল। শুধু কালার একটু আলাদা মনে হয়েছে।',
      bgColor: 'from-orange-300 to-orange-400'
    },
    {
      id: 4,
      name: 'Adam Gilchrist',
      avatar: '/images/avatar-4.png',
      rating: 5,
      review: 'খুবই সুন্দর ঘড়ি। কোয়ালিটি অনেক ভালো এবং দামও রিজনেবল। ক্যাশ অন ডেলিভারি সুবিধা আছে বলে সহজেই কিনতে পেরেছি।',
      bgColor: 'from-blue-400 to-blue-500'
    }
  ]

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            আমাদের কাস্টমার রিভিউ
          </span>
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="flex gap-4 md:gap-6 items-start group"
            >
              {/* Avatar Circle with Image */}
              <div className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${review.bgColor} flex items-center justify-center shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-300 p-1`}>
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image 
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Review Content */}
              <div className="flex-1 space-y-3">
                {/* Name */}
                <h3 className="text-lg md:text-xl font-bold text-gray-800">
                  {review.name}
                </h3>
                
                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar 
                      key={index}
                      className={`text-lg md:text-xl ${
                        index < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {review.review}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
