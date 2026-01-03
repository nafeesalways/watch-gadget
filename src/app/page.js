import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import WhyYazole from "./components/WhyYazole";

export default function Home() {
   return (
    <main className="min-h-screen">
      <Navbar />
      <Banner />
      <WhyYazole></WhyYazole>
    </main>
  )

}
