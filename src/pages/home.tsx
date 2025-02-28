import Cta from "../components/home/Cta";

import { MultiPaymentOptions } from "../components/MultiPaymentOptions";
import SecurePayments from "../components/securePayments";
import Hero from "../components/home/Hero";
import PayrollSection from "./automated_payroll";
import RealTimeNotifications from "../components/home/RealTimeNotifications";
import WhyChooseUs from '../components/WhyChooseUs';
import FAQSection from "../components/FAQSection";

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

