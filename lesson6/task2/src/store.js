import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import usersReducer from './users/users.reducer';

const reducer = combineReducers({
  users: usersReducer,
});
let thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('new state', store.getState());
  console.groupEnd();
  return result;
  return next.action;
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
