import React from 'react';
import { NavLink } from 'react-router-dom';

import { auth } from '../../../firebase/firebaseUtils';

const SignedInLinks = () => (
  <ul className="options">
    <li className="option"><NavLink to="/" exact>Homepage</NavLink></li>
    <li className="option"><div onClick={() => auth.signOut()}>Sign Out</div></li>
  </ul>
);

export default SignedInLinks;
