import { applyMiddleware, createStore } from 'redux';
import createLogger  from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducer from './CombineReducers';

const logger = createLogger();
const middleware = applyMiddleware(promise, thunk, logger);

export default createStore(reducer, middleware);
