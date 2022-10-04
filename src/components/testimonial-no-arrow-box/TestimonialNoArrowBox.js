import React from "react";

import classes from "./TestimonialNoArrowBox.module.css";

const TestimonialNoArrowBox = (props) => {
  return (
    <div className={classes["hero-testimonial--wrapper"]}>
      <img
        className={classes["hero-testimonial--image"]}
        src={props.imgSource}
      />
      <p className={classes["hero-testimonial--review"]}>{props.review}</p>
      <p
        className={classes["hero-testimonial--reviewer-top"]}
        id="reviewer-top"
      >
        {props.reviewer1}
      </p>
      <p
        className={classes["hero-testimonial--reviewer-bottom"]}
        id="reviewer-bottom"
      >
        {props.reviewer2}
      </p>
    </div>
  );
};

export default TestimonialNoArrowBox;
