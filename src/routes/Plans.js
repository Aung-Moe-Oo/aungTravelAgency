import classes from "./Plans.module.css";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import Plan from "../components/Plan";

const Plans = () => {
  return (
    <div className={classes}>
      <Navbar />
      <HeroImage heading="PLANS" text="Customised Tour" />
      <Plan />
      <Footer />
    </div>
  );
};

export default Plans;
