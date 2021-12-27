import React, { Component } from "react";
import classes from "./HeroImage.module.css";

export class HeroImage extends Component {
  render() {
    return (
      <div className={classes.heroImg}>
        <div className={classes.heading}>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImage;
