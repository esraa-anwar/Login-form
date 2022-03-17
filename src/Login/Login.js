import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import img1 from "./Logo-black.png";
import img2 from "./facebook (2).png";
import img3 from "./Google.png";
import img4 from "./apple-logo.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userRef = useRef();
  useEffect(() => {
    userRef.current.focus();
  }, []);
  const sentForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api-dev.rescounts.com/api/v1/users/login ",
        JSON.stringify({ email, password }),
        {
          header: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      alert(JSON.stringify(response?.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="gridContainer">
      <img src={img1} alt="img1" className="logo" />
      <h1 className="name">Login</h1>
      <p className="name"> Add your details to login</p>

      <input
        ref={userRef}
        className="inputField"
        value={email}
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Your Email"
      />

      <input
        ref={userRef}
        className="inputField"
        value={password}
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />
      <button className="loginButton button" type="submit" onClick={sentForm}>
        Login
      </button>

      <a className="name" href="/#">
        Forgot your password?
      </a>
      <p>or Login With</p>
      <button className="loginButton facebook" type="submit">
        <img src={img2} alt="facebook" className="icon" /> Login with Facebook
      </button>
      <button className="loginButton google" type="submit">
        <img src={img3} alt="google" className="icon" /> Login with Google
      </button>
      <button className="loginButton apple" type="submit">
        <img src={img4} alt="apple" className="icon" /> Login with Apple
      </button>
      <a href="/#" className="name">
        Don't have an Account?<span>Sign Up</span>{" "}
      </a>
      <p className="para">
        By proceeding, you agree to our Terms of Use and confirm
        <br />
        you have read our Privacy and Cookie Statement
      </p>
    </div>
  );
};

export default Login;
