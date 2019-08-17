import React from 'react';
import PropTypes from 'prop-types';
import SignedInLinks from './SignedInLinks/SignedInLinks';
import SignedOutLinks from './SignedOutLinks/SignedOutLinks';
import './Header.scss';

const Header = ({ currentUser }) => (
  <header className="header">
    <nav>
      {
            currentUser
              ? <SignedInLinks />
              : <SignedOutLinks />
          }
    </nav>
  </header>
);

Header.propTypes = {
  currentUser: PropTypes.object
};

export default Header;
