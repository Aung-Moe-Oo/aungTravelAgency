import { Link } from "react-router-dom";
import classes from "./PricingCard.module.css";

const PricingCard = () => {
  return (
    <div className={classes.pricing}>
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <h3>- Bagan -</h3>
          <span className={classes.bar}></span>
          <p className={classes.money}>180000 MMK</p>
          <p>- 3 Days and 2 Nights -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className={classes.card}>
          <h3>- Taunggyi -</h3>
          <span className={classes.bar}></span>
          <p className={classes.money}>150000 MMK</p>
          <p>- 3 Days and 2 Nights -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className={classes.card}>
          <h3>- Mandalay -</h3>
          <span className={classes.bar}></span>
          <p className={classes.money}>130000 MMK</p>
          <p>- 2 Days and 1 Night -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
