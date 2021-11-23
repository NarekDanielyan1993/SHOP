import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.js';
import rootSaga from './sagas/index';
import { composeWithDevTools } from "redux-devtools-extension"



const store = () => {
  const sagaMiddleware = createSagaMiddleware();
  return {
      ...createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))),
      runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default store;