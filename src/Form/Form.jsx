import { useState } from "react";
import FormSignUp from "./FormSignUp";
import FormSucces from "./FormSucces";
import "./Form.css";
function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="form-container">
      <div className="form-content-left">
        <img src="img/img-2.svg" alt="" className="form-img" />
      </div>
      {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSucces />}
    </div>
  );
}

export default Form;
