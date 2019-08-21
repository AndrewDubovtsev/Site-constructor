import React from 'react';
import {
  Route, Switch, Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import HomePage from '../pages/Homepage/Homepage';
import SignInAndSignUpPage from '../pages/SignInAndSignUp/SignInAndSignUp';

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

export default AppRouter;
