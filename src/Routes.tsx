import * as React from "react";
import {
  Switch,
  BrowserRouter,
  Route,
  Link,
  RouteComponentProps
} from "react-router-dom";

// Components
import Home from "./containers/Home";
import About from "./containers/About";
import Login from "./containers/Login";
import SignupRoutes from "./routes/SignupRoutes";

interface IMatchParams {
  name: string;
  topicId: string;
}

interface IProps extends RouteComponentProps<IMatchParams> {}

const Topic: React.SFC<IProps> = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics: React.SFC<IProps> = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact={true}
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Routes: React.SFC<{}> = () => (
  <BrowserRouter>
    <div id="app">
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignupRoutes} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
