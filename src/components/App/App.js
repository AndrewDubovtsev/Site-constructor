import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AppRouter from '../../routers/AppRouter';
import { setCurrentUser } from '../../store/actions/userActions';
import { selectCurrentUser } from '../../store/selectors/userSelectors';
import './App.scss';

class App extends Component {
  unsubscribeFromAuth = null;

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //
    //     userRef.onSnapshot((snapShot) => {
    //       this.setState(() => ({
    //         currentUser: {
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         }
    //       }));
    //     });
    //   } else {
    //     this.setState(() => ({ currentUser: userAuth }));
    //   }
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
