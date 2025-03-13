
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="w-full px-6 py-8 bg-white md:px-6 lg:px-16">
        <div className="flex flex-col ">
          <div className="flex items-center justify-between mt-5 mb-10 max-md:flex-col">
            <Link to="" className="flex items-center space-x-2">
              <img
                src="/Logo.png"
                width={200}
                height={200}
                alt="DefiFundr Logo"
                className="w-full h-full"
              />
            </Link>
            <nav>
              <ul className="flex  items-center  text-sm space-x-5 max-md:flex-col max-md:space-x-0 max-md:space-y-5 max-md:mt-7 text-[#000000] ">
                <li>
                  <Link to="/features" className="text-base font-medium">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/our-story" className="text-base font-medium ">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="text-base font-medium ">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-base font-medium">
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
                to="https://instagram.com"
                className="text-[#000000] "
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                to="https://facebook.com"
                className="text-[#000000] "
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" fill="text-[#000000]" />
              </Link>
              <Link
                to="https://twitter.com"
                className="text-[#000000] "
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" fill="text-[#000000]"/>
              </Link>
              <Link
                to="https://linkedin.com"
                className="text-[#000000] "
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" fill="text-[#000000]" />
              </Link>
            </div>


          </div>
        </div>
    </footer>
  )
}