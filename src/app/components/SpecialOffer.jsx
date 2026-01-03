"use client";

import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

export default function SpecialOffer() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      {/* Left Watch Images - Animated Up and Down */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 md:w-64 h-64 md:h-80">
        <div className="animate-slide-vertical-up relative w-full h-full">
          <Image
            src="/images/img10.png"
            alt="Watch Left"
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Right Watch Images - Animated Up and Down (opposite phase) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-64 h-64 md:h-80">
        <div className="animate-slide-vertical-down relative w-full h-full">
          <Image
            src="/images/img11.png"
            alt="Watch Right"
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 left-1/3 w-16 h-32 bg-linear-to-br from-blue-400 to-blue-600 transform -skew-y-12 opacity-20 blur-sm" />
      <div className="absolute top-32 right-1/3 w-20 h-40 bg-linear-to-br from-pink-400 to-pink-600 transform skew-y-12 opacity-20 blur-sm" />
      <div className="absolute bottom-20 left-1/4 w-12 h-24 bg-linear-to-br from-pink-400 to-purple-400 transform -skew-y-6 opacity-20 blur-sm" />
      <div className="absolute bottom-32 right-1/4 w-16 h-32 bg-linear-to-br from-blue-400 to-purple-600 transform skew-y-6 opacity-20 blur-sm" />

      {/* Center Content */}
      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center z-10">
        {/* Special Offer Badge/Shape */}
        <div className="relative inline-block mb-8 md:mb-12">
          {/* Background gradient shape */}
          <div className="relative">
            {/* Main badge shape */}
            <div
              className="relative bg-linear-to-br from-pink-400 via-purple-400 to-blue-500 px-12 md:px-20 py-16 md:py-20 rounded-3xl shadow-2xl"
              style={{
                clipPath:
                  "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)",
              }}
            >
              {/* Price Text */}
              <div className="space-y-3 md:space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                  মূল্যঃ ১৬৫০ টাকা
                </h2>

                {/* 50% OFF */}
                <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl">
                  50<span className="text-4xl md:text-5xl align-top">%</span>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
                    OFF
                  </div>
                </div>

                {/* Description */}
                <p className="text-white text-base md:text-lg lg:text-xl font-medium drop-shadow-md mt-4">
                  সরাসরি অর্ডার করতে পারেন আমাদের
                  <br />
                  অনলাইন শপ থেকে।
                </p>
              </div>

              {/* Decorative ribbon/tag effect */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-linear-to-r from-pink-500 to-purple-500 transform -skew-x-12 shadow-lg" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-linear-to-r from-purple-500 to-blue-500 transform skew-x-12 shadow-lg" />
            </div>
          </div>
        </div>

        {/* Order Button */}
        <button className="bg-linear-to-r from-pink-500 to-blue-500 text-white px-10 md:px-16 py-4 md:py-5 rounded-xl font-bold text-xl md:text-2xl flex items-center justify-center gap-3 mx-auto hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:from-pink-600 hover:to-blue-600 shadow-lg">
          <FaShoppingCart className="text-2xl" />
          অর্ডার করুন
        </button>
      </div>
    </section>
  );
}
