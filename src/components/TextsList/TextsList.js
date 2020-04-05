import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import TextItem from './TextItem/TextItem';

const TextsList = ({ texts }) => (
  <div>
    <h1>Your Texts</h1>
    <ul>
      {
        (texts || []).map((text) => <TextItem key={uuid()} text={text} />)
      }
    </ul>
  </div>
);

TextsList.propTypes = {
  texts: PropTypes.array
};

export default TextsList;
