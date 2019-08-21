import React from 'react';

import SignIn from '../../components/Auth/SignIn/SignIn';
import SignUp from '../../components/Auth/SignUp/SignUp';
import './SignInAndSignUp.scss';

const SignInAndSignUpPage = () => (
  <div className="signInAndSignUp">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
