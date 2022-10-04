import React from "react";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form className={classes["form-wrapper"]}>
      <label className={classes["form-label"]} for="inputName">
        Name:{" "}
      </label>
      <input
        className={classes["form-input-name"]}
        type="text"
        id="inputName"
        name="inputName"
      ></input>
      <label className={classes["form-label"]} for="inputEmail">
        Email:{" "}
      </label>
      <input
        className={classes["form-input-email"]}
        type="email"
        id="inputEmail"
        name="inputEmail"
      ></input>
      <label className={classes["form-label"]} for="inputMessage">
        Message:{" "}
      </label>
      <textarea
        className={classes["form-input-message"]}
        id="inputMessage"
        name="inputMessage"
      ></textarea>
    </form>
  );
};

export default ContactForm;
