export const ADD_USER = 'USERS/ADD_USER';
export const DELETE_USER = 'USERS/DELETE_USER';

export const addUser = user => {
  return {
    type: ADD_USER,
    user,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
