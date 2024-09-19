import { Link } from "react-router-dom";
import logo from "../../assets/yemlik-logo.jpg";
import "./SignUp.css";

// react
import { useState } from "react";

// firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../Firebase/Firebase-init";
import { setDoc, doc } from "firebase/firestore";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function createAccount(e) {
    e.preventDefault();
    try {
      // disabled button to prevent double attempt at account creation
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // update user information
      await updateProfile(user, {
        displayName: username,
      });
      // create profile document in users collection
      await setDoc(doc(db, "users", user.displayName), {
        userId: user.uid,
        username: username.trim(),
        admin: false,
      });
      // if sign up is successful, redirect to home page
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container flex justify-center items-center h-[95vh]">
      <div className="w-3/4 flex flex-col justify-center items-center gap-5 h-full">
        <img src={logo} alt="yemlik logo" className="yemlik-logo w-3/5 pb-5" />
        <form className="w-3/6" onSubmit={createAccount}>
          <h2 className="font-bold text-4xl pb-5">Sign up for an account.</h2>
          <p className="pb-5 text-xl opacity-50">
            Enter your email, username and password to create an account.
          </p>
          <div className="email-container flex flex-col pb-4">
            <label htmlFor="email" className="text-3xl pb-2">
              Email
            </label>
            <input
              className="outline-none border pt-4 pb-4 pl-3 pr-3 text-3xl rounded-2xl focus:border-[#61090d]"
              type="email"
              name="email"
              id="email"
              maxLength={30}
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
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
              value={username}
              onChange={handleUsername}
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
              value={password}
              onChange={handlePassword}
              required
            />
          </div>
          <button className="w-full bg-[#61090d] border text-white pl-2 pr-2 pt-3 pb-3 mb-3 text-3xl rounded-2xl hover:bg-white hover:border-[#61090d] hover:text-[#61090d]">
            Sign Up
          </button>
          <p className="text-center text-xl">
            have an account?{" "}
            <Link to="/login" className="underline text-[#61090d]">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="image-container bg-red-400"></div>
    </div>
  );
}

export default SignUp;
