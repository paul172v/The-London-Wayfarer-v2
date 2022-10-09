import React from "react";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const formValidationHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={formValidationHandler} className={classes["form-wrapper"]}>
      <label className={classes["form-label"]} htmlFor="inputName">
        Name:{" "}
      </label>
      <input
        className={classes["form-input-name"]}
        type="text"
        id="inputName"
        name="inputName"
      ></input>
      <label className={classes["form-label"]} htmlFor="inputEmail">
        Email:{" "}
      </label>
      <input
        className={classes["form-input-email"]}
        type="email"
        id="inputEmail"
        name="inputEmail"
      ></input>
      <label className={classes["form-label"]} htmlFor="inputMessage">
        Message:{" "}
      </label>
      <textarea
        className={classes["form-input-message"]}
        id="inputMessage"
        name="inputMessage"
      ></textarea>
      <input
        className={classes["form-input-submit"]}
        type="submit"
        value="Submit"
      />
    </form>
  );
};

export default ContactForm;
