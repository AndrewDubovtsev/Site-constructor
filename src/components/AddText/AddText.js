import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addText } from '../../store/actions/textActions';
import FormInput from '../UI/FormInput/FormInput';
import CustomButton from '../UI/CustomButton/CustomButton';

class AddText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      error: ''
    };
  }

  handleChange = (e) => {
    const text = e.target.value.trim();
    if (text) {
      this.setState(() => ({ text }));
    } else {
      this.setState(() => ({ error: 'Please enter a valid string.' }));
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addText } = this.props;
    const { text } = this.state;
    addText(text);
  };

  render() {
    const { text, error } = this.state;
    return (
      <div className="addText">
        <h2>Enter your new text</h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="text"
            value={text}
            type="text"
            label="text"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Submit</CustomButton>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addText: (message) => dispatch(addText(message))
  };
};

AddText.propTypes = {
  addText: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(AddText);
