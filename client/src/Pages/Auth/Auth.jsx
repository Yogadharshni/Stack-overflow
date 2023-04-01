import React, { useState } from 'react'
import './Auth.css'


// import { useReducer } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import AboutAuth from "./AboutAuth";
// import { signup, login } from "../../actions/auth";


const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

// const dispatch = useDispatch();
// const navigate = useNavigate();

const handleSwitch = () => {
  setIsSignup(!isSignup);
//   setName("");
//   setEmail("");
//   setPassword("");
};

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (!email && !password) {
//     alert("Enter email and password");
//   }
//   if (isSignup) {
//     if (!name) {
//       alert("Enter a name to continue");
//     }
//     dispatch(signup({ name, email, password }, navigate));
//   } else {
//     dispatch(login({ email, password }, navigate));
//   }
// };



    return (
  <session class='auth-session'>
     {isSignup && <AboutAuth />}
      <div className="auth-container-2">
       {!isSignup && <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png' alt="stack overflow" className="login-logo" />}
        <form >
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"/>
                </label>
          )}

          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"/>             
              </label>
         
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  forgot password?
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
            />{isSignup && <p>Password must contain at least eight characters</p>}
          </label>
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
          </button>
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "sign up"}
          </button>
        </p>
      </div>

  </session>
    )
}

export default Auth