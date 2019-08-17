import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import HomePage from '../pages/Homepage/Homepage';
import SignInAndSignUpPage from '../pages/SignInAndSignUp/SignInAndSignUp';

const AppRouter = ({ currentUser }) => (
  <BrowserRouter>
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

AppRouter.propTypes = {
  currentUser: PropTypes.object
};

export default AppRouter;
