import * as React from 'react';

// Styles
import '../styles/HomePage.css';

export interface HomePageProps {}

class HomePage extends React.Component<HomePageProps, {}> {
  render() {
    return (
      <div className="home">
        Hello from HomePage
      </div>
    );
  }
}

export default HomePage;