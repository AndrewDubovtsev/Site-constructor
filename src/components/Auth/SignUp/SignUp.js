import React, { Component } from 'react';

import FormInput from '../../UI/FormInput/FormInput';
import CustomButton from '../../UI/CustomButton/CustomButton';
import { auth, createUserProfileDocument } from '../../../firebase/firebaseUtils';
import './SignUp.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const {
      displayName, email, password, confirmPassword
    } = this.state;

    if (password !== confirmPassword) {
      this.setState(() => ({
        error: 'Passwords do no match.'
      }));
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState(() => ({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
      }));
    } catch (error) {
      this.setState(() => ({
        error: error.message
      }));
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();
    this.setState(() => ({
      [name]: trimmedValue || '',
      error: trimmedValue ? '' : `Please enter a valid ${name}.`,
    }));
  };

  render() {
    const {
      displayName, email, password, confirmPassword, error
    } = this.state;
    return (
      <div className="signUp">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default SignUp;
