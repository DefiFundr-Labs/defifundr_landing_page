import { DefiFundrLogo } from "../../assets/svg/general";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="bg-[#F2F2F3]  h-[80px] flex justify-between items-center">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center gap-[9px]">
          <DefiFundrLogo />

          <p className="font-semibold text-[18px] ">DefiFundr</p>
        </div>
        <div>
          <Button text="Join the waitlist" variant="button--primary" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
