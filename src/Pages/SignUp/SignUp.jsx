import { Link } from "react-router-dom";

import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

function SignUp() {
  return (
    <article className="signup-article">
      <Form header="Yemlik">
        <div className="username-container">
          <label htmlFor="username">Username</label>
          <input
            maxLength={30}
            type="text"
            name="username"
            id="username"
            required
          />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <Button title="Sign Up" />
        <footer>
          Have an account? <Link to="/login">Log in</Link>
        </footer>
      </Form>
    </article>
  );
}

export default SignUp;
