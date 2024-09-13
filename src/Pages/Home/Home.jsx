import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/login"> Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default Home;
