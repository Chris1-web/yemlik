import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/yemlik-logo.jpg";
import chicken from "../../assets/chicken.jpg";
import goat from "../../assets/goat.jpg";
import cow from "../../assets/cow.jpg";
import fish from "../../assets/fish.jpg";
import turkey from "../../assets/turkey.jpg";

function Home() {
  return (
    <div className="container text-center">
      <nav>
        <div className="logo flex justify-center">
          <img src={logo} alt="yemilk logo" className="w-1/4" />
        </div>
        <ul className="links flex gap-5 justify-center">
          <Link to="/login" className="underline">
            Log In
          </Link>
          <Link to="/signup" className="underline">
            Sign Up
          </Link>
        </ul>
      </nav>
      <ul className="grid grid-cols-3 gap-12 h-[20vh] text-3xl mt-14">
        <li>
          <Link to={"/chicken"}>
            <img src={chicken} alt="chicken" className="rounded-full" />
            <p>Chicken</p>
          </Link>
        </li>
        <li>
          <Link to={"/goat"}>
            <img src={goat} alt="Goat" className="rounded-full" />
            <p>Goat</p>
          </Link>
        </li>
        <li>
          <Link to={"/fish"}>
            <img src={fish} alt="Fish" className="rounded-full" />
            <p>Fish</p>
          </Link>
        </li>
        <li>
          <Link to={"/cow"}>
            <img src={cow} alt="Cow" className="rounded-full" />
            <p>Cow</p>
          </Link>
        </li>
        <li>
          <Link to={"/turkey"}>
            <img src={turkey} alt="Turkey" className="rounded-full" />
            <p>Turkey</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
