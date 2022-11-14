import React from "react";
import { motion } from "framer-motion";

import classes from "./DesktopHeroDescriptionBox.module.css";

const DesktopHeroDescriptionBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className={classes["desktop-hero-description--wrapper"]}
    >
      <p className={classes["desktop-hero-description--text"]}>
        We offer affordable, fun, safe accommodation for young backpackers and
        students, right along the River Thames.
      </p>
    </motion.div>
  );
};

export default DesktopHeroDescriptionBox;
