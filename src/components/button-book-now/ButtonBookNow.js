import React, { useState } from "react";
import { motion } from "framer-motion";

import classes from "./ButtonBookNow.module.css";

const ButtonBookNow = (props) => {
  const imageAnimate = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1 },
  };

  const [triggerActive, setTriggerActive] = useState(false);

  const fireTriggerHandler = () => {
    setTriggerActive(true);
  };

  return (
    <motion.button
      variants={imageAnimate}
      initial={"offscreen"}
      whileInView={fireTriggerHandler}
      animate={triggerActive ? "onscreen" : "offscreen"}
      transition={{ duration: 0.5 }}
      className={classes["btn-book-now"]}
      onClick={props.turnOnModal}
    >
      Book Now
    </motion.button>
  );
};

export default ButtonBookNow;
