import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormInput from '../../UI/FormInput/FormInput';
import CustomButton from '../../UI/CustomButton/CustomButton';
import { googleSignInStart, emailSignInStart } from '../../../redux/user/userActions';
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
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    const trimmedValue = value.trim();

    this.setState(() => ({
      [name]: trimmedValue || '',
      error: trimmedValue ? '' : `Please enter a valid ${name}.`,
    }));
  };

  render() {
    const { googleSignInStart } = this.props;
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
              type="button"
              isGoogleSignIn
              onClick={googleSignInStart}
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

SignIn.propTypes = {
  googleSignInStart: PropTypes.func.isRequired,
  emailSignInStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
