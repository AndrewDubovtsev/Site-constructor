import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './userReducer';
import textReducer from './textReducer';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  user: userReducer,
  text: textReducer
});

export default persistReducer(persistConfig, rootReducer);