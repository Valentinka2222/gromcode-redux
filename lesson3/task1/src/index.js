import { increment, decrement, reset } from './counter.actions';
import store from './store';
import { addUser, deleteUser, updateUser } from './user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());
console.log(store.getState());

store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'Bob' }));
store.dispatch(updateUser({ id: 2, name: 'Bob' }));
store.dispatch(deleteUser(1));
console.log(store.getState());
store.dispatch(updateUser(2, { name: 'Bob Martin', age: 17 }));
