import { Outlet } from "react-router";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
// import Navbar from "../../common/Navbar";
// import signup from "../../assets/images/signup.png";
// import signin from "../../assets/images/signin.png";


interface GuestLayoutProps {
  children?: React.ReactNode;
}

export default function GuestLayout({ children }: GuestLayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="">{children ? children : <Outlet />}</div>
      <Footer />
    </div>
  );
}
