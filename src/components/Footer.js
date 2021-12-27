import classes from "./Footer.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaMailBulk,
  FaSearchLocation,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.location}>
            <FaSearchLocation
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div className={classes.location}>
              <p>123 abc St.</p>
              <h4>Yangon, Myanmar</h4>
            </div>
          </div>
          <div className={classes.phone}>
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div className={classes.location}>
              <p>09123456789</p>
            </div>
          </div>
          <div className={classes.email}>
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div className={classes.location}>
              <p>travel@aung.com</p>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <h4>About Company</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias
            vero unde est aliquid dicta cum perferendis dolor molestias.
            Reprehenderit!
          </p>
          <div className={classes.social}>
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
