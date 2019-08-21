import {
  takeLatest, put, all, call
} from 'redux-saga/effects';

import UserActionTypes from '../../constants/UserActionTypes';
import { googleSignInSuccess, googleSignInFailure } from '../actions/userActions';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebaseUtils';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(googleSignInSuccess({
      id: userSnapshot.id,
      ...userSnapshot.data()
    }));
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
  ]);
}
