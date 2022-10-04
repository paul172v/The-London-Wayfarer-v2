import React from "react";

import classes from "./DesktopHeroDescriptionBox.module.css";

const DesktopHeroDescriptionBox = () => {
  return (
    <div className={classes["desktop-hero-description--wrapper"]}>
      <p className={classes["desktop-hero-description--text"]}>
        We offer affordable, fun, safe accommodation for young backpackers and
        students, right along the River Thames.
      </p>
    </div>
  );
};

export default DesktopHeroDescriptionBox;
