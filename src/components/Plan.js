import classes from "./Plan.module.css";
import taunggyi from "../assets/taunggyi.jpg";
import yangon from "../assets/yangon.jpg";
import { Link } from "react-router-dom";

const Plan = () => {
  return (
    <div className={classes.plan}>
      <div className={classes.left}>
        <h1>Plans</h1>
        <p>
          Do you want a Customised Tour? Please contact us to help you a
          convenient and peaceful trip.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className={classes.right}>
        <div className={classes.imgContainer}>
          <div className={classes.top}>
            <img src={taunggyi} alt="taunggyi" className={classes.img} />
          </div>
          <div className={classes.bottom}>
            <img src={yangon} alt="yangon" className={classes.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
