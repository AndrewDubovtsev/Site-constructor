import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const fbConfig = {
  apiKey: 'AIzaSyCrnlQIBPL5AhXfueXDlQGXpjSTzKgzWj8',
  authDomain: 'website-constructor-db.firebaseapp.com',
  databaseURL: 'https://website-constructor-db.firebaseio.com',
  projectId: 'website-constructor-db',
  storageBucket: '',
  messagingSenderId: '259944284545',
  appId: '1:259944284545:web:dd00649541981203'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (e) {
      console.log('An error creating a user ', e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(fbConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
