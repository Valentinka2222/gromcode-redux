import { createStore } from 'redux';
import { userReducer } from './users.reducer';
export const ADD_USER = 'USER/ADD';
export const DELETE_USER = 'USER/DELETE';
export const initialState = {
  userList: [],
};
const store = createStore(userReducer);
export default store;
