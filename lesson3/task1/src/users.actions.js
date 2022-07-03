import { DELETE_USER, ADD_USER } from './store';

export const deleteUser = id => {
  return {
    type: DELETE_USER,
    payload: { id },
  };
};

export const addUser = user => {
  return {
    type: ADD_USER,
    user,
  };
};
