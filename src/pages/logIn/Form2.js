import React, { useState } from "react";
import FormLogin from "./FormLogin";
import FormSuccess2 from "./FormSuccess2";
import "./Form2.css";
import { Link } from "react-router-dom";

const Form2 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container2">
        <Link to="/react-project-v1" className="close-btn">
          ×
        </Link>
        <div className="form-content-left">
          <img
            className="form-img2"
            src={require("../../images/img-4.svg").default}
            aria-hidden
            alt="spaceship"
          />
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <FormSuccess2 />
        )}
      </div>
    </>
  );
};

export default Form2;
