import React, { Component } from 'react';
import FormInput from '../../UI/FormInput/FormInput';
import CustomButton from '../../UI/CustomButton/CustomButton';
import { auth, signInWithGoogle } from '../../../firebase/firebaseUtils';
import './SignIn.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState(() => ({ email: '', password: '', error: '' }));
    } catch (error) {
      this.setState(() => ({ error: error.message }));
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    if (value.trim()) {
      this.setState(() => ({ [name]: value.trim(), error: '' }));
    } else {
      this.setState(() => ({ error: `Please enter a valid ${name}.` }));
    }
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <div className="signIn">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={email}
            type="email"
            label="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            value={password}
            type="password"
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              isGoogleSignIn
              onClick={signInWithGoogle}
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default SignIn;
