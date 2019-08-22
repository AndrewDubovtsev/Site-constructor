import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import AppRouter from '../../routers/AppRouter';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { checkUserSession } from '../../redux/user/userActions';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <AppRouter currentUser={currentUser} />
      </div>
    );
  }
}

App.propTypes = {
  checkUserSession: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
