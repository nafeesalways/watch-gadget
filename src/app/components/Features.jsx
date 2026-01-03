import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function Features() {
  const features = [
    "পানি সহ্য করার ক্ষমতা ৩ বার করতে পারবে",
    "চামড়া ব্যান্ড উৎপাদন & স্টেইনলেস স্টিলের তৈরি",
    "কালো সাদা লাল বাদামী রঙ এই ঘড়ি গুলো",
    "দৈর্ঘ্য 24 সেমি",
    "ঘড়িগুলি 30M ওয়াটারপ্রফ",
    "অ্যান্টি-গ্রায়ার স্যাফায়ার ক্রিস্টাল",
    "দুই বছরের ওয়ারেন্টি",
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Features List */}
          <div className="space-y-6">
            {/* Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-500 mb-4">
                ঘড়িটির ফীচার গুলো !
              </h2>
              {/* Decorative underline */}
              <div className="flex items-center gap-2">
                <div className="w-24 md:w-32 h-1 bg-pink-400 rounded-full" />
                <div className="w-3 h-3 rounded-full border-2 border-pink-400" />
              </div>
            </div>

            {/* Features List */}
            <ul className="space-y-4 md:space-y-5">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 md:gap-4">
                  <FaCheckCircle className="text-pink-400 text-xl md:text-2xl shrink-0 mt-1" />
                  <span className="text-gray-700 text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Watch Image */}
          <div className="relative">
            {/* Watch Image Container */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative aspect-4/3">
                <Image
                  src="/images/watch-feature.png"
                  alt="DIOR BLACK ULTRAMATTE Watch"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Gradient Label at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 py-4 md:py-6">
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center tracking-wide">
                  DIOR BLACK ULTRAMATTE
                </h3>
              </div>
            </div>

            {/* Decorative gear/clock elements in background */}
            <div className="absolute -top-8 -right-8 w-32 h-32 opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-800"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="35"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-800"
                />
                <line
                  x1="50"
                  y1="15"
                  x2="50"
                  y2="25"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-800"
                />
                <line
                  x1="50"
                  y1="75"
                  x2="50"
                  y2="85"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-800"
                />
                <line
                  x1="15"
                  y1="50"
                  x2="25"
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-800"
                />
                <line
                  x1="75"
                  y1="50"
                  x2="85"
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-800"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
