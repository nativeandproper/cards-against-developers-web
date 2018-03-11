import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  RouteComponentProps
} from 'react-router-dom';

// Components
import HomePage from './containers/HomePage';

interface MatchParams {
    name: string;
    topicId: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}

const Topic: React.SFC<Props> = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics: React.SFC<Props> = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route
      exact={true}
      path={match.path}
      render={() => (
        <h3>Please select a topic.</h3>
      )}
    />
  </div>
);

const Routes: React.SFC<{}> = () => (
  <BrowserRouter>
    <div id="app">
      <Route
        exact={true}
        path="/"
        component={HomePage}
      />
      <Route
        path="/topics"
        component={Topics}
      />
    </div>
  </BrowserRouter>
);

export default Routes;