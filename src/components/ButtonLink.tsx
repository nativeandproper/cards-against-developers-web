import * as React from "react";
import { NavLink } from "react-router-dom";

// Styles
import "../styles/ButtonLink.css";

export interface IButtonLinkProps {
  to: string;
  classes: string;
  name: string;
}

const ButtonLink: React.SFC<IButtonLinkProps> = props => (
  <NavLink to={props.to} className={`nav-button ${props.classes}`}>
    {props.name}
  </NavLink>
);

export default ButtonLink;
