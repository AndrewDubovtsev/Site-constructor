import {combineReducers} from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import authReducer from './authReducer';
import textReducer from './textReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  text: textReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;