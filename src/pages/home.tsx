import SecurePayments from "../components/securePayments"
import Hero from "../components/home/Hero";
import PayrollSection from "./automated_payroll"

const Home = () => {
  return (
    <main>
      <Hero />
      <PayrollSection/>
      <SecurePayments/>
    </main>
  );
};


export default Home;
