import React from "react";
import useForm from "./useForm";
import validate from "./validation";

function FormSignUp({ submitForm }) {
  const { handleSubmit, handleChange, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Get started with us today! Create your account by filling out
          information below!
        </h1>

        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
            <input
              id="username"
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
          </label>
          {errors.username ? <p>{errors.username}</p> : <p>&nbsp;</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
          </label>
          {errors.email ? <p>{errors.email}</p> : <p>&nbsp;</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          {errors.password ? <p>{errors.password}</p> : <p>&nbsp;</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm password
            <input
              id="password2"
              type="password"
              name="password2"
              className="form-input"
              placeholder="Enter your password"
              value={values.password2}
              onChange={handleChange}
            />
          </label>
          {errors.password2 ? <p>{errors.password2}</p> : <p>&nbsp;</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Sign up
        </button>

        <span className="form-input-login">
          Already have an account? Loggin <span className="link">here</span>
        </span>
      </form>
    </div>
  );
}

export default FormSignUp;
