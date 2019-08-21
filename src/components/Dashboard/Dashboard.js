import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectTextsList } from '../../store/selectors/textSelectors';
import TextsList from '../TextsList/TextsList';
import AddText from '../AddText/AddText';

const Dashboard = ({ texts }) => (
  <div>
    <h1>Dashboard</h1>
    <TextsList texts={texts} />
    <AddText />
  </div>
);

Dashboard.propTypes = {
  texts: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  texts: selectTextsList
});

export default connect(mapStateToProps)(Dashboard);
