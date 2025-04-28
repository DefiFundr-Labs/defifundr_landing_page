import Navbar from "../components/common/Navbar";
import FeatureList from "../components/waitlist-page/feature-list";
// import FloatingCoins from "../components/waitlist-page/floating-coins";
import WaitlistForm from "../components/waitlist-page/waitlist-form";

export default function WaitlistPage() {
  return (
    <main className="min-h-screen w-full text-white relative overflow-hidden bg-gradient-to-br from-[#1E0B40] via-[#2D1259] to-[#1A1040]">
      {/* Floating coins background */}
      {/* <FloatingCoins /> */}

      {/* Header */}
      <Navbar />
      {/* Main content */}
      <div className="container relative z-10 flex flex-col items-center justify-center px-4 pt-8 pb-16 mx-auto">
        {/* Crypto bracelet image */}
        <div className="mb-8 w-full max-w-[400px] mx-auto">
          <img
            src="/src/assets/images/crypto-bracelet.png"
            alt="Cryptocurrency Bracelet"
            className="w-full h-auto"
            loading="eager"
          />
        </div>

        {/* Main heading */}
        <h1 className="max-w-3xl mb-4 text-4xl font-bold text-center md:text-5xl lg:text-6xl">
          Be the First to Experience Effortless Payroll
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mb-12 text-sm text-center md:text-base text-white/80">
          Get Early Access To A Smarter Way To Manage Payroll, Invoices, And
          Employee Payments—Whether In Crypto Or Fiat. Join Our Waitlist And Be
          Among The First To Streamline Payments With Automation, Security, And
          Compliance Built In.
        </p>

        {/* Form section */}
        <div className="w-full max-w-3xl mb-12">
          <WaitlistForm />
        </div>

        {/* Features section */}
        <FeatureList />
      </div>
    </main>
  );
}
