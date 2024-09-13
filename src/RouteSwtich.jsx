import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";

function RouteSwitch() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<p>Welcome Home</p>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
