import { Link } from "react-router-dom";

import logo from "../../assets/yemlik-logo.jpg";
import "./login.css";

function Login() {
  return (
    <div className="container flex justify-center items-center h-[95vh]">
      <div className="w-3/4 flex flex-col justify-center items-center gap-5 h-full">
        <img src={logo} alt="yemlik logo" className="yemlik-logo w-3/5 pb-5" />
        <form className="w-3/6">
          <h2 className="font-bold text-4xl pb-5">Log in to your account.</h2>
          <p className="pb-5 text-xl opacity-50">
            Enter your username and password to log in.
          </p>
          <div className="username-container flex flex-col pb-4">
            <label htmlFor="username" className="text-3xl pb-2">
              Username
            </label>
            <input
              className="outline-none border pt-4 pb-4 pl-3 pr-3 text-3xl rounded-2xl focus:border-[#61090d]"
              type="text"
              name="username"
              id="username"
              maxLength={30}
              required
            />
          </div>
          <div className="password-container flex flex-col pb-4">
            <label htmlFor="username" className="text-3xl pb-2">
              Password
            </label>
            <input
              className="outline-none border pt-4 pb-4 pl-4 pr-4 text-3xl rounded-2xl focus:border-[#61090d]"
              type="password"
              name="password"
              id="password"
              maxLength={30}
              required
            />
          </div>
          <button className="w-full border bg-[#61090d] text-white pl-2 pr-2 pt-3 pb-3 mb-3 text-3xl rounded-2xl hover:bg-white hover:border-[#61090d] hover:text-[#61090d]">
            Login
          </button>
          <p className="text-center text-xl">
            {"Don't"} have an account?{" "}
            <Link to="/signup" className="underline text-[#61090d]">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <div className="image-container bg-red-400"></div>
    </div>
  );
}

export default Login;
