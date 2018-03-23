import * as React from 'react';
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';

// Components
import Signup from '../containers/Signup';
import SignupConfirmation from '../containers/SignupConfirmation';

interface MatchParams {
  name: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const SignupRoutes: React.SFC<Props> = ({ match }) => (
  <Switch>
    <Route
      exact={true}
      path={match.url}
      component={Signup}
    />
    <Route
      exact={true}
      path={`${match.url}/confirmation`}
      component={SignupConfirmation}
    />
  </Switch>
);

export default withRouter(SignupRoutes);