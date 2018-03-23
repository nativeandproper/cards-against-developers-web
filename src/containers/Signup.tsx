import * as React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../styles/LoginSignup.css';

export interface SignupProps {}
export interface SignupState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default class Signup extends React.Component<SignupProps, Partial<SignupState>> {
  constructor(props: SignupProps) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }

  handleChange = (key: string, value: string) => {
    this.setState({
      [key]: value
    });
  }

  validateAndSubmit = () => {
    console.log('signup data to POST: ', this.state);
  }

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
            value={this.state.firstName}
            onChange={(e) => this.handleChange('firstName', e.target.value)}
          />
          <input
            type="text"
            placeholder="last name"
            value={this.state.lastName}
            onChange={(e) => this.handleChange('lastName', e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={(e) => this.handleChange('email', e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            value={this.state.password}
            onChange={(e) => this.handleChange('password', e.target.value)}
          />
        </div>
        <div className="login-signup-cta">
          <button
            className="submit-button"
            onClick={this.validateAndSubmit}
          >
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