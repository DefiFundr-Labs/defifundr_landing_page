import { Link } from "react-router-dom";
import hero_section_bg from "../../assets/images/Hero-section-bg.png";

function Hero() {
  return (
    <section className="bg-gradient-to-tr  from-[#FEF8F2] via-[#ffffff] to-[#EBFBFF]">
      <div
        style={{ backgroundImage: `url(${hero_section_bg})` }}
        className="container flex flex-col items-center justify-center h-[calc(100vh-80px)] py-24  md:py-[13.2rem] space-y-10 bg-center  bg-cover bg-[20%_0%] sm:bg-center bg-no-repeat"
      >
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="max-w-[17ch] text-center hero">
            The Modern Way to Manage Your Team
          </h1>
          <p className="text-[0.91rem] font-medium text-[#1A1A1A] max-w-[59ch] capitalize leading-[140%] sm:leading- text-center ">
            Say goodbye to payroll headaches and endless spreadsheets. Automate
            payroll, manage employees, and process invoices—whether in crypto,
            fiat, or both.
          </p>
        </div>
        <div>
          <Link className="button--primary" to="/waitlist">
            Join the Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
