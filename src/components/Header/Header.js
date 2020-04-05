import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/userSelectors';
import SignedInLinks from './SignedInLinks/SignedInLinks';
import SignedOutLinks from './SignedOutLinks/SignedOutLinks';
import './Header.scss';

const Header = ({ currentUser, signOutStart }) => (
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
  currentUser: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);
