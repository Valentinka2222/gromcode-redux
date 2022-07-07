import { createStore, combineReducers } from 'redux';
import pageReducer from './users/userList.reducer';
import usersReducer from './users/users.reducer';

export const usersList = [
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Justin',
  },
  {
    id: 'id-4',
    age: 45,
    name: 'Franklin',
  },
  {
    id: 'id-5',
    age: 45,
    name: 'John',
  },
  {
    id: 'id-6',
    age: 45,
    name: 'Andrew',
  },
  {
    id: 'id-7',
    age: 45,
    name: 'Pol',
  },
  {
    id: 'id-8',
    age: 45,
    name: 'Ron',
  },
  {
    id: 'id-9',
    age: 45,
    name: 'Harry',
  },
  {
    id: 'id-10',
    age: 45,
    name: 'Anna',
  },
];

const reducer = combineReducers({
  users: usersReducer,
  currentPage: pageReducer,
});
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
