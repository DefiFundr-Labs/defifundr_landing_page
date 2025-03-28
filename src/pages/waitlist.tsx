"use client";

import { DefiFundrLogo } from "../assets/svg/general";
import FeatureList from "../components/waitlist-page/feature-list";
import FloatingCoins from "../components/waitlist-page/floating-coins";
import WaitlistForm from "../components/waitlist-page/waitlist-form";

export default function WaitlistPage() {
  return (
    <main className="min-h-screen w-full text-white relative overflow-hidden bg-gradient-to-br from-[#1E0B40] via-[#2D1259] to-[#1A1040]">
      {/* Floating coins background */}
      <FloatingCoins />

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10 backdrop-blur-sm bg-[#1E0B40]/50">
        <div className="flex items-center gap-4">
          <DefiFundrLogo />
          <p className="font-semibold text-[18px] ">DefiFundr</p>
        </div>
        <button className="font-medium px-4 py-2 rounded-full bg-white/90 text-[#1E0B40] hover:bg-white transition-all">
          Join The Waitlist
        </button>
      </header>
      {/* Main content */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center pt-8 pb-16 relative z-10">
        {/* Crypto bracelet image */}
        <div className="mb-8 w-full max-w-[400px] mx-auto">
          <img
            src="/images/crypto-bracelet.png"
            alt="Cryptocurrency Bracelet"
            className="w-full h-auto"
            loading="eager"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 max-w-3xl">
          Be the First to Experience Effortless Payroll
        </h1>

        {/* Subheading */}
        <p className="text-center mb-12 max-w-2xl text-sm md:text-base text-white/80">
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
