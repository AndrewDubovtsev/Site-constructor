import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { EnvironmentTypes } from '../constants/EnvironmentTypes';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === EnvironmentTypes.DEVELOPMENT) {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
