import * as React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../styles/LoginSignup.css';

export interface LoginProps {}
export interface LoginState {
  email: string;
  password: string;
}

export default class Login extends React.Component<LoginProps, Partial<LoginState>> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (key: string, value: string) => {
    this.setState({
      [key]: value
    });
  }

  login = () => {
    console.log('login data to POST: ', this.state);
  }

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
            value={this.state.email}
            onChange={(e) => this.handleChange('email', e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={(e) => this.handleChange('password', e.target.value)}
          />
        </div>
        <div className="login-signup-cta">
          <button
            className="submit-button"
            onClick={this.login}
          >
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