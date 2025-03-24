import Cta from "../components/home/Cta";

import { MultiPaymentOptions } from "../components/home/MultiPaymentOptions";
import SecurePayments from "../components/home/securePayments";
import Hero from "../components/home/Hero";
import PayrollSection from "../components/home/automated_payroll";
import RealTimeNotifications from "../components/home/RealTimeNotifications";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FAQSection from "../components/home/FAQSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <PayrollSection />
      <SecurePayments />
      <RealTimeNotifications />
      <MultiPaymentOptions />
      <WhyChooseUs />
      <FAQSection />
      <Cta />
    </main>
  );
};

export default Home;
