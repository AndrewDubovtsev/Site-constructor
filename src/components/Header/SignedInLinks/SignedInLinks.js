import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signOutStart } from '../../../redux/user/userActions';


const SignedInLinks = ({ signOutStart }) => (
  <ul className="options">
    <li className="option"><NavLink to="/" exact>Homepage</NavLink></li>
    <li className="option">
      <div onClick={signOutStart}>Sign Out</div>
    </li>
  </ul>
);

SignedInLinks.propTypes = {
  signOutStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(null, mapDispatchToProps)(SignedInLinks);
