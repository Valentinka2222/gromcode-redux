import { deleteUser, addUser } from './users.actions';
import store from './store';

const user = {
  name: 'John',
  id: 23,
};
const user1 = {
  name: 'John',
  id: 24,
};
store.dispatch(addUser(user));

store.dispatch(addUser(user1));
store.dispatch(deleteUser(24));
const state = store.getState();
console.log(state);

console.log(store.getState());
