import { DefiFundrLogo } from "../../assets/svg/general";

const Navbar = () => {
  return (
    <div className="bg-[#F2F2F3] container h-[80px] flex justify-between items-center">
      <div className="flex items-center gap-[9px] ml-[16px] sm:ml-[120px]">
        <DefiFundrLogo />

        <p className="font-semibold text-[18px] ">DefiFundr</p>
      </div>
      <button className="bg-[#1A1A1A] font-semibold text-white text-sm px-4 py-2 rounded-[9px] mr-[16px] sm:mr-[120px]">
        Join The Waitlist
      </button>
    </div>
  );
};

export default Navbar;
