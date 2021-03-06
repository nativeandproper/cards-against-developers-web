import * as React from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  RouteComponentProps
} from "react-router-dom";

// Components
import Signup from "../containers/Signup";
import SignupConfirmation from "../containers/SignupConfirmation";

interface IMatchParams {
  name: string;
}

interface IProps extends RouteComponentProps<IMatchParams> {}

const SignupRoutes: React.SFC<IProps> = ({ match }) => (
  <Switch>
    <Route exact={true} path={match.url} component={Signup} />
    <Route
      exact={true}
      path={`${match.url}/confirmation`}
      render={props => {
        return props.location.state ? (
          <SignupConfirmation {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  </Switch>
);

export default withRouter(SignupRoutes);
