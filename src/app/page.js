import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import WhyYazole from "./components/WhyYazole";
import Features from "./components/Features";
import WatchCarousel from "./components/WatchCarousel";
import ServicesVideo from "./components/ServicesVideo";
import PriceCTA from "./components/PriceCTA";

export default function Home() {
   return (
    <main className="min-h-screen">
      <Navbar />
      <Banner />
      <WhyYazole></WhyYazole>
      <Features></Features>
      <WatchCarousel></WatchCarousel>
      <ServicesVideo></ServicesVideo>
      <PriceCTA></PriceCTA>
    </main>
  )

}
