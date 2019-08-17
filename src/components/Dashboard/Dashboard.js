import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import TextsList from '../TextsList/TextsList';
import AddText from '../AddText/AddText';

const Dashboard = ({ texts }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <TextsList texts={texts} />
      <AddText />
    </div>
  );
};

Dashboard.propTypes = {
  texts: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    texts: state.firestore.text.texts
  }
};

export default compose(
  firestoreConnect(() => ['texts']),
  connect(mapStateToProps),
)(Dashboard);
