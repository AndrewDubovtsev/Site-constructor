import React from 'react';
import {
  Route, Switch, Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from '../components/Header/Header';
import HomePage from '../pages/Homepage/Homepage';
import SignInAndSignUpPage from '../pages/SignInAndSignUp/SignInAndSignUp';
import { selectCurrentUser } from '../redux/user/userSelectors';

const AppRouter = ({ currentUser }) => (
  <div>
    <Header currentUser={currentUser} />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        exact
        path="/signin"
        render={() => (currentUser ? (
          <Redirect to="/" />
        ) : (
          <SignInAndSignUpPage />
        ))}
      />
    </Switch>
  </div>
);

AppRouter.propTypes = {
  currentUser: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AppRouter);
