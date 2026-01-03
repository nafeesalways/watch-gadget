import Image from "next/image";

export default function ServicesVideo() {
  const services = [
    {
      image: "/images/img4.png",
      title: "বিশ্বব্যাপী ফ্রি শিপিং।",
      bgGradient: "from-purple-400 to-pink-400",
    },
    {
      image: "/images/img5.png",
      title: "100 ভাগ খাঁটি",
      bgGradient: "from-purple-400 to-pink-400",
    },
    {
      image: "/images/img6.png",
      title: "শেষ মুলা গ্যারান্টি।",
      bgGradient: "from-purple-400 to-pink-400",
    },
    {
      image: "/images/img7.png",
      title: "24/7 গ্রাহক সহায়তা",
      bgGradient: "from-purple-400 to-pink-400",
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Services section - left side full width, right side cut */}
      <div className="relative -ml-4 md:ml-0">
        {/* Diagonal gradient background */}
        <div
          className="relative bg-linear-to-br from-blue-300 via-purple-300 to-pink-400 py-12 md:py-16 pl-4 md:pl-16 pr-8 md:pr-12"
          style={{
            clipPath: "polygon(0 0, 98% 0, 92% 100%, 0 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Services Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pr-4 md:pr-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-3 md:space-y-4 group"
                >
                  {/* Icon Circle with Image */}
                  <div
                    className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-linear-to-br ${service.bgGradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 p-4 md:p-5`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-white font-bold text-sm md:text-base lg:text-lg drop-shadow-md">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Embed - directly attached below services */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-2">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/B5HE89TG_Co?si=HHYnkK9IyBq_TnZ9"
            title="Funnel Liner Logo Launching Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
