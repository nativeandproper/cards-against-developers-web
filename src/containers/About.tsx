import * as React from 'react';

// Styles
import '../styles/About.css';

export interface AboutProps {}

export default class About extends React.Component<AboutProps> {
  render() {
    return (
      <div className="about">
        Hello from About Page
      </div>
    );
  }
}