import React from 'react';
import PropTypes from 'prop-types';

import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="formInput" onChange={handleChange} {...otherProps} />
    {
        label && (
        <label className={`${otherProps.value && 'shrink'} formInputLabel`}>
          {label}
        </label>
        )
      }
  </div>
);

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string
};

export default FormInput;
