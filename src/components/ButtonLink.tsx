import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import '../styles/ButtonLink.css';

export interface ButtonLinkProps {
  to: string;
  classes: string;
  name: string;
}

const ButtonLink: React.SFC<ButtonLinkProps> = (props) => (
  <NavLink
    to={props.to}
    className={`nav-button ${props.classes}`}
  >
    {props.name}
  </NavLink>
);

export default ButtonLink;