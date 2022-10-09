import React, { useState, useRef } from "react";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [formError, setFormError] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const formValidationHandler = (e) => {
    e.preventDefault();

    if (
      nameRef.current.value.length === 0 ||
      emailRef.current.value.length === 0 ||
      messageRef.current.value.length === 0
    ) {
      setFormError(true);
      setFormSent(false);
    } else {
      setFormError(false);
      setFormSent(true);

      console.log({
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      });
    }
  };

  return (
    <form onSubmit={formValidationHandler} className={classes["form-wrapper"]}>
      <label className={classes["form-label"]} htmlFor="inputName">
        Name:{" "}
      </label>
      <input
        ref={nameRef}
        className={classes["form-input-name"]}
        type="text"
        id="inputName"
        name="inputName"
      ></input>
      <label className={classes["form-label"]} htmlFor="inputEmail">
        Email:{" "}
      </label>
      <input
        ref={emailRef}
        className={classes["form-input-email"]}
        type="email"
        id="inputEmail"
        name="inputEmail"
      ></input>
      <label className={classes["form-label"]} htmlFor="inputMessage">
        Message:{" "}
      </label>
      <textarea
        ref={messageRef}
        className={classes["form-input-message"]}
        id="inputMessage"
        name="inputMessage"
      ></textarea>
      <input
        className={classes["form-input-submit"]}
        type="submit"
        value="Submit"
      />

      {formSent && (
        <p className={classes["form-input-message--sent"]}>
          Form successfully sent!
        </p>
      )}

      {formError && (
        <p className={classes["form-input-message--error"]}>
          All fields must be completed!
        </p>
      )}
    </form>
  );
};

export default ContactForm;
