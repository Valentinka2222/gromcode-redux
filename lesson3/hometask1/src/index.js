import { setLanguage } from './language.actions';
import store from './store';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';
store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('en'));
store.dispatch(addProduct({ phone: 'samsung', id: 2 }));
store.dispatch(addProduct({ phone: 'samsung', id: 3 }));
store.dispatch(removeProduct(3));

console.log(store.getState());

store.dispatch(setUser({ id: 1, name: 'Tom' }));
store.dispatch(setUser({ id: 2, name: 'Bob' }));
store.dispatch(setUser({ id: 4, name: 'Bob' }));
store.dispatch(removeUser(1));
console.log(store.getState());
