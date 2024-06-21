import React, { useEffect } from "react";
import "./Signup.css";
import { useFormik } from "formik";
import { sighUpSchema } from "../schemas";
import { useNavigate } from "react-router-dom";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Signup = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: sighUpSchema,
      onSubmit: (values, action) => {
        localStorage.setItem("register", JSON.stringify(values));
        localStorage.setItem("user", JSON.stringify(values));
        navigate("/");
        action.resetForm();
      },
    });

  return (
    <>
      <div className="containerSignup">
        <div className="backgroundSignup">
          <h1 style={{ marginBottom: "10px" }}>Register</h1>
          <p>Let's creat new account</p>
          <form className="formSignup" onSubmit={handleSubmit}>
            <div className="flex inputSign">
              <label htmlFor="username">Usename:</label>
              <input
                type="text"
                id="username"
                name="username"
                className={`${
                  !(errors.username && touched.username)
                    ? "mBottom inputvalid"
                    : "invalid-input"
                }`}
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username ? (
                <p>{errors.username}</p>
              ) : null}
            </div>
            <div className="flex inputSign">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  !(errors.email && touched.email)
                    ? "mBottom inputvalid"
                    : "invalid-input"
                }`}
              />
              {errors.email && touched.email ? <p>{errors.email}</p> : null}
            </div>
            <div className="flex inputSign">
              <label htmlFor="passowrd">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  !(errors.password && touched.password)
                    ? "mBottom inputvalid"
                    : "invalid-input"
                }`}
              />
              {errors.password && touched.password ? (
                <p>{errors.password}</p>
              ) : null}
            </div>
            <div className="flex inputSign">
              <label htmlFor="confirm_password">Confirm Password:</label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  !(errors.confirm_password && touched.confirm_password)
                    ? "mBottom inputvalid"
                    : "invalid-input"
                }`}
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p>{errors.confirm_password}</p>
              ) : null}
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      ;
    </>
  );
};

export default Signup;
