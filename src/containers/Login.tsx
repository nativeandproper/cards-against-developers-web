import * as React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../styles/LoginSignup.css';

export interface LoginProps {}

export default class Login extends React.Component<LoginProps, {}> {
  render() {
    return (
      <div className="login-signup">
        <h1>
          Log In
        </h1>
        <div className="login-signup-form">
          <input
            type="text"
            placeholder="email"
          />
          <input
            type="password"
            placeholder="password"
          />
        </div>
        <div className="login-signup-cta">
          <button className="submit-button">
            log in
          </button>
          <div className="login-signup-text">
            No account? <Link to="/signup" className="cta-link">Sign up</Link>
          </div>
        </div>
      </div>
    );
  }
}