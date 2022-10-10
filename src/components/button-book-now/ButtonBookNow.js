import React from "react";

import classes from "./ButtonBookNow.module.css";

const ButtonBookNow = (props) => {
  return (
    <button className={classes["btn-book-now"]} onClick={props.turnOnModal}>
      Book Now
    </button>
  );
};

export default ButtonBookNow;
