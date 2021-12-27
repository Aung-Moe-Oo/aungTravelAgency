import { Link } from "react-router-dom";
import bg from "../assets/travel.mp4";
import classes from "./Video.module.css";

const Video = () => {
  return (
    <div className={classes.hero}>
      <video autoPlay loop muted className={classes.video}>
        <source src={bg} type="video/mp4" />
      </video>
      <div className={classes.content}>
        <h1>AUNG. TRAVEL.</h1>
        <p>Myanmar Travel Agency</p>
        <div className={classes.btn}>
          <Link to="/" className="btn">
            Pricing
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
