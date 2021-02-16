import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { Redirect } from "react-router-dom";

const Form = props => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setmessage] = useState("Hello")

  function login() {
    setLoggedIn(true);
    props.parentCallback(true);
    return <Redirect to="/default" />;
  }

  return (
    <div className="section is-fullheight">
      {loggedIn && <Redirect to="/default" />}
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <h1>Detail Form</h1>
            <form onSubmit={handleSubmit} noValidate>              
              <div className="field">
                <label className="label">Given Name</label>
                <div className="control">
                  <input
                    className={`input ${errors.fname && "is-danger"}`}
                    type="fname"
                    name="fname"
                    onChange={handleChange}
                    value={values.fname || ""}
                    required
                  />
                </div>
                {errors.fname && (
                  <p className="help is-danger">{errors.fname}</p>
                )}
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                  <input
                    className={`input ${errors.lname && "is-danger"}`}
                    type="lname"
                    name="lname"
                    onChange={handleChange}
                    value={values.lname || ""}
                    required
                  />
                </div>
                {errors.lname && (
                  <p className="help is-danger">{errors.lname}</p>
                )}
              </div>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                Submit
              </button>
            </form>
            <h6>{message}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
