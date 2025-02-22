import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import DefiFundr_Logo from "../assets/DefiFundr_Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#F2F2F3] h-[80px] p-4 flex justify-between items-center">
      <div className="flex items-center gap-[9px]">
        <img
          src={DefiFundr_Logo}
          alt="DefiFundr Logo"
          className="h-[24px] w-[14px]"
        />
        <p className="font-semibold text-[18px] ">DefiFundr</p>
      </div>
      <div className="hidden md:flex space-x-6">
        <NavLink
          to="#features"
          className="text-black font-semibold relative group"
        >
          Features
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NavLink>
        <NavLink
          to="#our-story"
          className="text-black font-semibold relative group"
        >
          Our Story
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NavLink>
        <NavLink
          to="#testimonials"
          className="text-black font-semibold relative group"
        >
          Testimonials
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NavLink>
        <NavLink to="#faq" className="text-black font-semibold relative group">
          FAQ
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NavLink>
      </div>
      <button className="hidden md:block bg-[#1A1A1A] text-white px-4 py-2 rounded-[9px]">
        Join The Waitlist
      </button>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="text-black" />
          ) : (
            <Menu className="text-black" />
          )}
        </button>
      </div>
      <div
        className={`absolute top-0 left-0 w-full bg-[#F2F2F3] flex flex-col items-center space-y-4 md:hidden transition-transform duration-300 pb-5 ${
          isOpen
            ? "transform translate-y-18 pb-5"
            : "transform -translate-y-full pb-5"
        }`}
      >
        <NavLink
          to="#features"
          className="text-black font-semibold relative group"
        >
          Features
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NavLink>
        <NavLink
          to="#our-story"
          className="text-black font-semibold relative group"
        >
          Our Story
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NavLink>
        <NavLink
          to="#testimonials"
          className="text-black font-semibold relative group"
        >
          Testimonials
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NavLink>
        <NavLink to="#faq" className="text-black font-semibold relative group">
          FAQ
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NavLink>
        <button className="bg-[#1A1A1A] text-white px-4 py-2 rounded-[9px]">
          Join The Waitlist
        </button>
      </div>
    </div>
  );
};

export default Navbar;
