import * as React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

import {
  invalidFirstName,
  invalidLastName,
  invalidEmail,
  invalidPassword
} from "../helpers/stringHelper";

// Styles
import "../styles/LoginSignup.css";

export interface ISignupProps extends RouteComponentProps<{}> {}
export interface ISignupState {
  attemptedSubmit: boolean;
  firstName: string;
  firstNameHasError: boolean;
  lastName: string;
  lastNameHasError: boolean;
  email: string;
  emailHasError: boolean;
  password: string;
  passwordHasError: boolean;
}

class Signup extends React.Component<ISignupProps, Partial<ISignupState>> {
  constructor(props: ISignupProps) {
    super(props);

    this.state = {
      attemptedSubmit: false,
      email: "",
      emailHasError: false,
      firstName: "",
      firstNameHasError: false,
      lastName: "",
      lastNameHasError: false,
      password: "",
      passwordHasError: false
    };
  }

  handleChange = (key: string, value: string) => {
    this.setState({
      [key]: value
    });
  };

  isValidForm = () => {
    const firstNameHasError = invalidFirstName(this.state.firstName);
    const lastNameHasError = invalidLastName(this.state.lastName);
    const emailHasError = invalidEmail(this.state.email);
    const passwordHasError = invalidPassword(this.state.password);

    this.setState({
      emailHasError,
      firstNameHasError,
      lastNameHasError,
      passwordHasError
    });

    return (
      !firstNameHasError &&
      !lastNameHasError &&
      !emailHasError &&
      !passwordHasError
    );
  };

  validateAndSubmit = (e: React.SyntheticEvent<HTMLElement>) => {
    this.setState({
      attemptedSubmit: true
    });

    if (this.isValidForm()) {
      console.log("signup data to POST: ", this.state);

      this.props.history.push("/signup/confirmation", {
        firstName: this.state.firstName
      });
    } else {
      e.preventDefault();
    }
  };

  render() {
    const firstNameErrorClasses =
      this.state.attemptedSubmit && this.state.firstNameHasError
        ? `error error-show`
        : `error`;
    const lastNameErrorClasses =
      this.state.attemptedSubmit && this.state.lastNameHasError
        ? `error error-show`
        : `error`;
    const emailErrorClasses =
      this.state.attemptedSubmit && this.state.emailHasError
        ? `error error-show`
        : `error`;
    const passwordErrorClasses =
      this.state.attemptedSubmit && this.state.passwordHasError
        ? `error error-show`
        : `error`;

    return (
      <div className="login-signup">
        <h1>Sign Up</h1>
        <div className="login-signup-form">
          <div className={firstNameErrorClasses}>
            Your first name cannot be empty and must be less than 32 characters
          </div>
          <input
            type="text"
            placeholder="first name"
            value={this.state.firstName}
            onChange={e => this.handleChange("firstName", e.target.value)}
          />
          <div className={lastNameErrorClasses}>
            Your last name cannot be empty and must be less than 32 characters
          </div>
          <input
            type="text"
            placeholder="last name"
            value={this.state.lastName}
            onChange={e => this.handleChange("lastName", e.target.value)}
          />
          <div className={emailErrorClasses}>
            Your email must be a valid email e.g. swaglord@gmail.com
          </div>
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={e => this.handleChange("email", e.target.value)}
          />
          <div className={passwordErrorClasses}>
            Your password must be between 5 and 32 characters
          </div>
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={e => this.handleChange("password", e.target.value)}
          />
        </div>
        <div className="login-signup-cta">
          <button className="submit-button" onClick={this.validateAndSubmit}>
            submit
          </button>
          <div className="login-signup-text">
            Have an account?{" "}
            <Link to="/login" className="cta-link">
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
