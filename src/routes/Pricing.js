import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";
import classes from "./Pricing.module.css";

const Pricing = () => {
  return (
    <div className={classes}>
      <Navbar />
      <HeroImage heading="PRICING" text="Choose your trip" />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Pricing;
