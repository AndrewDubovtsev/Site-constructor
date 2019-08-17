import React, { Component } from 'react';
import AppRouter from '../../routers/AppRouter';
import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils';
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(() => ({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }));
        });
      } else {
        this.setState(() => ({ currentUser: userAuth }));
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <AppRouter currentUser={currentUser}/>
      </div>
    );
  }
}

export default App;
