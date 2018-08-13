import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './reducer';

export const history = createBrowserHistory();

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleWare)
);

export default store;