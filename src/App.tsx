import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from 'react-router-dom';

// Components
import TestContainer from './containers/test_container';

// Styles
import './styles/App.css';

interface MatchParams {
    name: string;
    topicId: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <TestContainer name="test container" />
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

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

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
  
        <hr/>
  
        <Route
          exact={true}
          path="/"
          component={Home}
        />
        <Route
          path="/about"
          component={About}
        />
        <Route
          path="/topics"
          component={Topics}
        />
      </div>
    </Router>
    );
  }
}

export default App;
