/* globals __DEV__ */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ available on: https://github.com/jhen0409/react-native-debugger
const composeEnhancers = __DEV__ ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);