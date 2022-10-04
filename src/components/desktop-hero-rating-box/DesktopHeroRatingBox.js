import React from "react";
import { AiFillStar } from "react-icons/ai";

import classes from "./DesktopHeroRatingBox.module.css";

const DesktopHeroRatingBox = () => {
  return (
    <div className={classes["desktop-hero-rating--wrapper"]}>
      <p className={classes["desktop-hero-rating--text"]}>
        Rated{" "}
        <span className={classes["desktop-hero-rating--star"]}>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      </p>
      <p className={classes["desktop-hero-rating--text"]}>on Hostelworld</p>
      <p className={classes["desktop-hero-rating--sub-text"]}>
        Out of 597 reviews
      </p>
    </div>
  );
};

export default DesktopHeroRatingBox;
