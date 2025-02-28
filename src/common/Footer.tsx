import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-white px-6 py-8 md:px-6 lg:px-16">
        <div className=" flex flex-col">
          <div className="flex items-center justify-between max-md:flex-col mb-10 mt-5">
            <Link href="" className="flex items-center space-x-2">
              <Image
                src="/Logo.png"
                width={200}
                height={200}
                alt="DefiFundr Logo"
                className="h-full w-full"
              />
            </Link>
            <nav>
              <ul className="flex  items-center  text-sm space-x-5 max-md:flex-col max-md:space-x-0 max-md:space-y-5 max-md:mt-7 text-[#000000] ">
                <li>
                  <Link href="/features" className="font-medium text-base">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/our-story" className="font-medium text-base ">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="font-medium text-base ">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="font-medium text-base">
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>

          </div>

          <div className="flex items-center justify-between max-md:flex-col max-md:space-y-5 ">
          <p className="text-md text-[#393939] max-md:mb-5">© Untitled 2025 - All Rights Reserved</p>

          <div className=" w-[65%] mx-1 max-sm:w-full h-[2px] bg-[#D7D7D7] rounded-md"></div>


            <div className="flex space-x-4">

              <Link
                href="https://instagram.com"
                className="text-[#000000] "
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-[#000000] "
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" fill="text-[#000000]" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-[#000000] "
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" fill="text-[#000000]"/>
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-[#000000] "
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" fill="text-[#000000]" />
              </Link>
            </div>


          </div>
        </div>
    </footer>
  )
}