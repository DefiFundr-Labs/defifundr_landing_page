import { Link, useLocation } from "react-router-dom";
import { DefiFundrLogo } from "../../assets/svg/general";

const Navbar = () => {
  const location = useLocation();
  const isWaitlistPage = location.pathname === "/waitlist";

  return (
    <header
      className={`${
        isWaitlistPage ? "bg-transparent" : "bg-[#F2F2F3]"
      } h-[80px] flex justify-between items-center`}
    >
      <nav className="container flex items-center justify-between">
        <Link to={"/"} className="flex items-center gap-[9px]">
          <DefiFundrLogo />
          <p className="font-semibold text-[18px] ">DefiFundr</p>
        </Link>
        <div className="items-center hidden gap-4 sm:flex">
          {isWaitlistPage ? (
            <Link className="button--secondary" to="/waitlist">
              Join the Waitlist
            </Link>
          ) : (
            <Link className="button--primary" to="/waitlist">
              Join the Waitlist
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
