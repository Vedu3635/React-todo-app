import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login1.css";

import { useSelector } from "react-redux";

const Login1 = () => {
  const redmode = useSelector((state) => state.toggleMode.value);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const navigate = useNavigate();

  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [pwdIsTouched, setPwdIsTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const enteredPwdIsValid = enteredPassword.trim().length >= 6;

  const emailIsInvalid = !enteredEmailIsValid && emailIsTouched;
  const pwdIsInvalid = !enteredPwdIsValid && pwdIsTouched;

  const emailBlurHandler = () => {
    setEmailIsTouched(true);

    if (!enteredEmailIsValid) {
      return;
    }
  };

  const pwdBlurHandler = () => {
    if (!enteredPwdIsValid) {
      return;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setEmailIsTouched(true);
    setPwdIsTouched(true);

    if (!enteredEmailIsValid) {
      alert("Email is not valid.");
      return;
    }

    if (!enteredPwdIsValid) {
      alert("Password is not valid.");
      return;
    }
    JSON.parse(localStorage.getItem("todoData"));
    const savedData = JSON.parse(localStorage.getItem("register"));
    if (enteredEmail == savedData.email) {
      if (enteredPassword == savedData.password) {
        const data = { email: enteredEmail, pwd: enteredPassword };
        localStorage.setItem("user", JSON.stringify(data));
        setEnteredEmail("");
        setEmailIsTouched(false);
        setEnteredPassword("");
        setPwdIsTouched(false);
        navigate("/");
      } else {
        alert("Password is not correct");
      }
    } else {
      alert("Email is not correct");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    // <div className={` ${mode === "dark" ? "todoDark" : "todoLight"} flex`}></div>
    <div
      className={` ${
        redmode === "dark" ? "container-login" : "container-login-light"
      } flex`}
    >
      <div className="background flex">
        <div className="fonts">
          <h1>LOGIN</h1>
          <p>Welcome back !!</p>
        </div>
        <div className="form flex ">
          <form onSubmit={handleLogin}>
            <div className="mail flex">
              <label htmlFor="email">Email Address:</label>

              <input
                id="email"
                name="email"
                type="email"
                className={`${
                  !emailIsInvalid ? "mBottom input" : "invalid-input"
                }`}
                // value={enteredEmail}
                onChange={(e) => setEnteredEmail(e.target.value)}
                onBlur={emailBlurHandler}
                placeholder="john@deo.com"
                required
              />
              {emailIsInvalid && (
                <p className="error"> Email must not be empty.</p>
              )}
            </div>
            <div className="password flex">
              <label>Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                className={`${
                  !pwdIsInvalid ? "mBottom input" : "invalid-input"
                }`}
                value={enteredPassword}
                onChange={(e) => setEnteredPassword(e.target.value)}
                onBlur={pwdBlurHandler}
                placeholder="Your Password"
                required
              />
              {pwdIsInvalid && (
                <p className="error">Password must be 6 character long.</p>
              )}
            </div>
            <button type="submit" id="login" name="login" value="login">
              Login
            </button>
            <Link to="/signup">
              <button type="submit" id="signup" name="signup">
                Signup
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login1;
