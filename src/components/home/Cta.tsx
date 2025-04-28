import { Link } from "react-router-dom";
import cta_bg_image from "../../assets/images/cta_bg.png";
import Button from "../common/Button";

function Cta() {
  return (
    <section className="container py-15 md:py-20 bg-[#121212] md:bg-[#ffffff]">
      <div className="flex flex-col items-center justify-center gap-6 ">
        <div
          style={{ backgroundImage: `url(${cta_bg_image})` }}
          className="bg-[#000000] w-full rounded-[2rem] py-32 flex flex-col justify-center items-center gap-8 text-white bg-cover bg-center bg-no-repeat relative overflow-hidden   px-4"
        >
          {/* Background shadow animation container */}
          <div className="absolute inset-0 z-10 circle-grandient"></div>

          <div className="relative z-30 flex flex-col items-center justify-center space-y-5">
            <h2 className="text-[2rem] sm:text-4xl md:text-5xl leading-[120%] font-semibold tracking-[-2%] max-w-[20ch] text-center">
              Ready to Simplify Your Payroll?
            </h2>
            <p className="text-[0.91rem] font-regular max-w-[53ch] text-[#F8F8F8] sm:text-base capitalize leading-[27.2px] tracking-[0.3px] text-center">
              Make the smarter move today and streamline your payroll and
              invoices all in one click with Defi
            </p>
          </div>
          <div className="relative z-30">
            <Link className="button--tertiary" to="/waitlist">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
