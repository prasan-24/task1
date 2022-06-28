import React, { useState } from "react";
import isEmail from "validator/lib/isEmail";

const Register = () => {
  const [allValues, setAllValues] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
    country: "",
    message: "",
  });

  const [errors, seterrors] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
    country: "",
    message: "",
  });

  const validateAndSave = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
    if (e.target.name === "name" || e.target.name === "email") {
      if (e.target.value === "" && e.target.name !== "email") {
        seterrors({ ...errors, [e.target.name]: `Required Field` });
      } else if (e.target.name === "email") {
        if (e.target.value === "") {
          seterrors({ ...errors, [e.target.name]: `Required Field` });
        } else if (isEmail(e.target.value) === false) {
          seterrors({
            ...errors,
            [e.target.name]: `Please Enter Valid Email`,
          });
        } else {
          seterrors({ ...errors, [e.target.name]: ` ` });
        }
      } else if (e.target.name === "mobile") {
        if (e.target.value < 10) {
          seterrors({
            ...errors,
            [e.target.name]: `Please Enter Valid Mobile Number`,
          });
        } else {
          seterrors({ ...errors, [e.target.name]: "" });
        }
      } else {
        seterrors({ ...errors, [e.target.name]: "" });
      }
    }
  };

  const validateFields = (e) => {
    if (e.target.name === "name" || e.target.name === "email") {
      if (e.target.value === "" && e.target.name !== "email") {
        seterrors({ ...errors, [e.target.name]: `Required Field` });
      } else if (e.target.name === "email") {
        if (e.target.value === "") {
          seterrors({ ...errors, [e.target.name]: `Required Field` });
        } else if (isEmail(e.target.value) === false) {
          seterrors({
            ...errors,
            [e.target.name]: `Please Enter Valid Email`,
          });
        } else {
          seterrors({ ...errors, [e.target.name]: ` ` });
        }
      } else if (e.target.name === "mobile") {
        if (e.target.value < 10) {
          seterrors({
            ...errors,
            [e.target.name]: `Please Enter Valid Mobile Number`,
          });
        } else {
          seterrors({ ...errors, [e.target.name]: "" });
        }
      } else {
        seterrors({ ...errors, [e.target.name]: "" });
      }
    }
  };

  return (
    <div className="register-form">
      <form className="p-5">
        <div className="mb-3">
          <label for="input-name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="input-name"
            onChange={validateAndSave}
            onBlur={validateFields}
          />
          <div className="form-invalid-feedback">{errors.name}</div>
        </div>
        <div className="mb-3">
          <label for="input-email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={validateAndSave}
            id="input-email"
            onBlur={validateFields}
          />
          <div className="form-invalid-feedback">{errors.email}</div>
        </div>
        <div className="mb-3">
          <label for="input-mobile" className="form-label">
            Mobile
          </label>
          <input
            type="text"
            name="mobile"
            className="form-control"
            id="input-mobile"
            onChange={validateAndSave}
            onBlur={validateFields}
          />
          <div className="form-invalid-feedback">{errors.mobile}</div>
        </div>
        <div className="mb-3">
          <label for="input-city" className="form-label">
            City
          </label>
          <input
            type="text"
            name="city"
            className="form-control"
            id="input-city"
            onChange={validateAndSave}
            onBlur={validateFields}
          />
          <div className="form-invalid-feedback">{errors.city}</div>
        </div>
        <div className="mb-3">
          <label for="input-state" className="form-label">
            State
          </label>
          <input
            type="text"
            name="state"
            className="form-control"
            id="input-state"
            onChange={validateAndSave}
            onBlur={validateFields}
          />
          <div className="form-invalid-feedback">{errors.state}</div>
        </div>
        <div className="mb-3">
          <label for="input-country" className="form-label">
            Country
          </label>
          <input
            type="text"
            name="country"
            className="form-control"
            id="input-country"
            onChange={validateAndSave}
            onBlur={validateFields}
          />
          <div className="form-invalid-feedback">{errors.country}</div>
        </div>
        <div className="mb-3">
          <label for="input-message" className="form-label">
            Message
          </label>
          <input
            type="text"
            name="message"
            className="form-control"
            id="input-message"
            onChange={validateAndSave}
            onBlur={validateFields}
          />
          <div className="form-invalid-feedback">{errors.message}</div>
        </div>
        <button
          type="submit"
          disabled={!allValues.name || !allValues.email}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
