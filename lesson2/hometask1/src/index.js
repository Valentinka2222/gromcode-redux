import { deleteUser, addUser } from './users.actions';
import store from './store';

const user = {
  name: 'John',
  id: 23,
};
store.dispatch(addUser(user));
const state = store.getState();
console.log(state);
store.dispatch(deleteUser(23));

console.log(store.getState());
