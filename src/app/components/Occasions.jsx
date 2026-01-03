"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function Occasions() {
  const occasionsLeft = [
    "স্মার্ট ওয়াচ",
    "গুভেল ডায়াল মহিলাদের ঘড়ি",
    "ফ্যাশন ক্যাপল ওয়াচ",
  ];

  const occasionsMiddle = [
    "মার্নিকালার স্ট্র্যাপ ঘড়ি",
    "বিজনেস উইমেন ওয়াচ",
    "প্রাইভেট লেবেল উইমেন ওয়াচ",
  ];

  const occasionsRight = [
    "ডায়মন্ড কোয়ার্টিজ মুভমেন্ট ঘড়ি",
    "স্টেইনলেস স্টিল ক্যাপল ওয়াচ",
    "পকেট ওয়াচ এবং নার্স ওয়াচ",
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-linear-to-b from-pink-50 to-purple-50 overflow-hidden">
      {/* Heading with decorative line */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            বিভিন্ন ধরণের সাশ্রয়ী মূল্যে ঘড়ি গুলোর ধরন
          </span>
        </h2>

        {/* Decorative underline with circles */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-3 h-3 rounded-full border-2 border-pink-400" />
          <div className="w-32 md:w-48 h-1 bg-linear-to-r from-pink-400 to-purple-400 rounded-full" />
          <div className="w-3 h-3 rounded-full border-2 border-purple-400" />
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start mb-12">
          {/* Left Column */}
          <div className="space-y-4">
            {occasionsLeft.map((occasion, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-pink-400 text-xl shrink-0 mt-1" />
                <span className="text-gray-700 text-base md:text-lg font-medium">
                  {occasion}
                </span>
              </div>
            ))}
          </div>

          {/* Middle Column */}
          <div className="space-y-4">
            {occasionsMiddle.map((occasion, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-pink-400 text-xl shrink-0 mt-1" />
                <span className="text-gray-700 text-base md:text-lg font-medium">
                  {occasion}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {occasionsRight.map((occasion, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-pink-400 text-xl shrink-0 mt-1" />
                <span className="text-gray-700 text-base md:text-lg font-medium">
                  {occasion}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Watch Image */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <div className="animate-slide-horizontal absolute w-full h-full">
            <div className="relative w-full h-full max-w-2xl mx-auto">
              <Image
                src="/images/img9.png"
                alt="Luxury Watch"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
