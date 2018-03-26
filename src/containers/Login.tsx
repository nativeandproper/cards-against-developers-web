import * as React from "react";
import { Link } from "react-router-dom";

import apiClient from "../lib/apiClient";

// Styles
import "../styles/LoginSignup.css";

export interface ILoginProps {}
export interface ILoginState {
  email: string;
  loginError: string;
  password: string;
}

export default class Login extends React.Component<
  ILoginProps,
  Partial<ILoginState>
> {
  constructor(props: ILoginProps) {
    super(props);

    this.state = {
      email: "",
      loginError: "",
      password: ""
    };
  }

  handleChange = (key: string, value: string) => {
    this.setState({
      [key]: value
    });
  };

  login = () => {
    const { email, password } = this.state;
    const request = { email, password };

    apiClient("POST", "/login", request)
      .then((resp: any) => {
        // TODO: redirect user
      })
      .catch(err => {
        err.text().then((errorMsg: string) => {
          this.setState({
            loginError: errorMsg
          });
        });
      });
  };

  render() {
    return (
      <div className="login-signup">
        <h1>Log In</h1>
        <div className="login-signup-form">
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={e => this.handleChange("email", e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={e => this.handleChange("password", e.target.value)}
          />
          {this.state.loginError && (
            <div className="error error-show">{this.state.loginError}</div>
          )}
        </div>
        <div className="login-signup-cta">
          <button className="submit-button" onClick={this.login}>
            log in
          </button>
          <div className="login-signup-text">
            No account?{" "}
            <Link to="/signup" className="cta-link">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
