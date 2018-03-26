import * as React from "react";

// Styles
import "../styles/About.css";

export interface IAboutProps {}

export default class About extends React.Component<IAboutProps, {}> {
  render() {
    return <div className="about">Hello from About Page</div>;
  }
}
