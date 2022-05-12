import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { validateLogin } from "../../redux/actions/loginActions";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("DISPATCH: " + username);
    console.log("DISPATCH: " + password);

    dispatch(validateLogin(username, password));
    setUsername("");
    setPassword("");
  };
  return (
    <div className="container">
      <h1 className="login-title"> Login</h1>

      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <label className="login-label"> Email</label>
        <input
          className="login-input"
          type="text"
          name="id"
          placeholder=""
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="login-label" htmlFor="password">
          Password
        </label>
        <input
          className="login-input"
          type="password"
          name="password"
          id="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login-btn-div">
          <button className="login-btn" type="submit">
            Login
          </button>
        </div>
        <div className="redirect-signup">
          <h6 className="redirect1">Don't have an account? </h6>
          <h6 className="redirect2">Sign up</h6>
        </div>
      </form>
    </div>
  );
};

export default Login;
