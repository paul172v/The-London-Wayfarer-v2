import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import classes from "./DesktopHeroTestimonialBox.module.css";

const DesktopHeroTestimonialBox = (props) => {
  return (
    <div className={classes["hero-testimonial--wrapper"]}>
      <img
        className={classes["hero-testimonial--image"]}
        src={props.imgSource}
      />
      <span
        className={classes["hero-testimonial--arrow"]}
        onClick={props.switchTestimonial}
      >
        <AiOutlineArrowRight />
      </span>
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

export default DesktopHeroTestimonialBox;
