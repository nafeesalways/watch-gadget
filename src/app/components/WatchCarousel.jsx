'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function WatchCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const watches = [
    {
      id: 1,
      name: 'GEM DIOR',
      image: '/images/img1.png'
    },
    {
      id: 2,
      name: 'LA D DE DIOR SATINE',
      image: '/images/img2.png'
    },
    {
      id: 3,
      name: 'LA MINI D DE DIOR SATINE',
      image: '/images/img3.png'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % watches.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + watches.length) % watches.length)
  }

  // Calculate which watches to show (current and next 2)
  const getVisibleWatches = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % watches.length
      visible.push(watches[index])
    }
    return visible
  }

  const visibleWatches = getVisibleWatches()

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Carousel Container */}
        <div className="relative flex items-center justify-center gap-4 md:gap-8">
          
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-linear-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous watch"
          >
            <FaChevronLeft className="text-xl md:text-2xl" />
          </button>

          {/* Watch Cards Container */}
          <div className="flex-1 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {visibleWatches.map((watch, index) => (
                <WatchCard 
                  key={`${watch.id}-${index}`} 
                  watch={watch}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-linear-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next watch"
          >
            <FaChevronRight className="text-xl md:text-2xl" />
          </button>
        </div>

        {/* Dots Indicator (Optional) */}
        <div className="flex justify-center gap-2 mt-8">
          {watches.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-linear-to-r from-pink-400 to-purple-400 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Watch Card Component
function WatchCard({ watch, index }) {
  return (
    <div 
      className="group relative bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      style={{
        animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s both`
      }}
    >
      {/* Watch Image */}
      <div className="relative aspect-square bg-white p-4 md:p-6">
        <div className="relative w-full h-full">
          <Image 
            src={watch.image}
            alt={watch.name}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Watch Name with Gradient on Hover */}
      <div className="relative py-4 md:py-6 overflow-hidden">
        {/* Default background */}
        <div className="absolute inset-0 bg-white transition-opacity duration-300 group-hover:opacity-0" />
        
        {/* Gradient background on hover */}
        <div className="absolute inset-0 bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Text */}
        <h3 className="relative text-center text-lg md:text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 px-4">
          {watch.name}
        </h3>
      </div>
    </div>
  )
}
