import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";

function RouteSwitch() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path=":productName" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
