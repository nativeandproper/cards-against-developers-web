import * as React from 'react';

// Styles
import '../styles/SignupConfirmation.css';

export interface SignupConfirmationProps {}

export default class SignupConfirmation extends React.Component<SignupConfirmationProps, {}> {
  render() {
    return (
      <div className="signup-confirmation-page">
        <h1>
          Hey Bud!
        </h1>
        <h1>
          {`(sorry ${`NAME`}, we're not actually buds just yet)`}
        </h1>
        <div className="thanks-bud-img" />
        <div className="confirmation-copy">
          A verification link has been sent to your email account.
        </div>
        <div className="confirmation-copy">
          You have 24 hours to click on the verification link to complete account registration. If you do not receive an email within 24 hours, please  <a href="mailto:nativeandproper@gmail.com">contact us</a>.
        </div>
      </div>
    );
  }
}