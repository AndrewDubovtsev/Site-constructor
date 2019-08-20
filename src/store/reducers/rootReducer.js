import {combineReducers} from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import userReducer from './userReducer';
import textReducer from './textReducer';

const rootReducer = combineReducers({
  auth: userReducer,
  text: textReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;