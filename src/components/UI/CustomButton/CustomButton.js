import React from 'react';
import PropTypes from 'prop-types';
import './CustomButton.scss';

const CustomButton = ({
  children, isGoogleSignIn, ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn && 'googleSignIn'} customButton`}
    {...otherProps}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  isGoogleSignIn: PropTypes.bool
};

export default CustomButton;
