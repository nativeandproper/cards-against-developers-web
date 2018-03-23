import * as React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../styles/LoginSignup.css';

export default class Signup extends React.Component<{}, {}> {
  render() {
    return (
      <div className="login-signup">
        <h1>
          Sign Up
        </h1>
        <div className="login-signup-form">
          <input
            type="text"
            placeholder="first name"
          />
          <input
            type="text"
            placeholder="last name"
          />
          <input
            type="text"
            placeholder="email"
          />
          <input
            type="text"
            placeholder="password"
          />
        </div>
        <div className="login-signup-cta">
          <button className="submit-button">
            submit
          </button>
          <div className="login-signup-text">
            Have an account? <Link to="/login" className="cta-link">Log In</Link>
          </div>
        </div>
      </div>
    );
  }
}