import React from 'react';
import PropTypes from 'prop-types';

const TextItem = ({ text }) => {
  const { id, message } = text;
  return (
    <li key={id}>{message}</li>
  );
};

TextItem.propTypes = {
  text: PropTypes.object
};

export default TextItem;
