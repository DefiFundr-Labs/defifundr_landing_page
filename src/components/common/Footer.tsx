import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { DefiFundrLogo } from "../../assets/svg/general";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-white">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full mt-5 mb-10 sm:justify-between gap-14 sm:flex-row">
          <Link to="" className="flex items-center gap-[9px]">
            <DefiFundrLogo />
            <p className="font-semibold text-[18px] ">DefiFundr</p>
          </Link>
          {/* <div className="flex items-center justify-center">
            <ul className="flex flex-col sm:flex-row items-center gap-6 [&_li]:font-medium [&_li]:">
              <li className="hover:underline underline-offset-4 ">
                <Link to="">Features</Link>
              </li>
              <li className="hover:underline underline-offset-4 ">
                <Link to="">Our Story</Link>
              </li>
              <li className="hover:underline underline-offset-4 ">
                <Link to="">Testimonials</Link>
              </li>
              <li className="hover:underline underline-offset-4 ">
                <Link to="">FAQ</Link>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="flex flex-col items-center justify-between w-full gap-8 sm:flex-row ">
          <p className="text-md text-[#393939] max-md:mb-5">
            © Untitled 2025 - All Rights Reserved
          </p>

          <div className=" mx-1 w-full sm:w-fit h-[2px] bg-[#D7D7D7] rounded-md grow"></div>

          <div className="flex space-x-4">
            <Link
              to="https://instagram.com"
              className="text-[#000000] group"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5 group-hover:text-primary" />
            </Link>
            <Link
              to="https://facebook.com"
              className="text-[#000000] group"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5 group-hover:text-primary" />
            </Link>
            <Link
              to="https://twitter.com"
              className="text-[#000000] group"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-5 h-5 group-hover:text-primary" />
            </Link>
            <Link
              to="https://linkedin.com"
              className="text-[#000000] group"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
