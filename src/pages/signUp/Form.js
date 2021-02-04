import React, { useState } from "react";
import "./Form";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import { Link } from 'react-router-dom';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <Link className="close-btn" to="/react-project-v1">
          ×
        </Link>
        <div className="form-content-left">
          <img
            className="form-img"
            src={require("../../images/img-2.svg").default}
            aria-hidden
            alt="image"
          />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
