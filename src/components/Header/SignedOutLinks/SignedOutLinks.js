import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => (
  <ul className="options">
    <li className="option"><NavLink className="option" to="/signin">Sign In</NavLink></li>
  </ul>
);

export default SignedOutLinks;
