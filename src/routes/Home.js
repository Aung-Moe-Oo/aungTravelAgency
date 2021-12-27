import React from "react";
import Video from "../components/Video";
import Navbar from "../components/Navbar";
import classes from "./Home.module.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className={classes.home}>
      <Navbar />
      <Video />
      <Footer />
    </div>
  );
};

export default Home;
