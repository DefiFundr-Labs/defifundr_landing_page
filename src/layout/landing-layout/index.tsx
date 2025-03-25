import { Outlet } from "react-router";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

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
