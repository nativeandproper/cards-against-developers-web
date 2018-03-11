import * as React from 'react';

// Components
import ButtonLink from '../components/ButtonLink';

// Styles
import '../styles/HomePage.css';

export interface HomePageProps {}

class HomePage extends React.Component<HomePageProps, {}> {
  render() {
    return (
      <div className="home">
        <div className="home-nav">
            <ButtonLink
              to="/about"
              classes="nav-button"
              name="about"
            />
            <ButtonLink
              to="/docs"
              classes="nav-button"
              name="docs"
            />
        </div>
        <div className="home-center">
          <div className="motto">
            <h2>
              a RESTful api for <b>bad</b> developers and <b><i>even</i> worse</b> human beings.
            </h2>
          </div>
          <div className="login-signup">
            <ButtonLink
              to="/login"
              classes="nav-button"
              name="log in"
            />
            <ButtonLink
              to="/signup"
              classes="nav-button"
              name="sign up"
            />
          </div>
        </div>
        <div className="title">
          <h1>
            cards for developers
          </h1>
        </div>
      </div>
    );
  }
}

export default HomePage;