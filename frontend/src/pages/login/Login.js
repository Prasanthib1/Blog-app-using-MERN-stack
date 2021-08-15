import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <div className="login-wrapper">
      <span className="login-title">Login</span>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="login-input"
          placeholder="Enter Username"
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="login-input"
          placeholder="Enter Password"
          ref={passwordRef}
        />
        <button className="login-button" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
       <div className="login-reg">New User? <Link to="/register">Register Here</Link></div>
      </div>
    </div>
  );
}
