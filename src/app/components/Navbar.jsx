import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-block">
          <Image 
            src="/images/logo.png" 
            alt="Watch Gadget Logo" 
            width={200} 
            height={50}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>
      </div>
    </nav>
  )
}
