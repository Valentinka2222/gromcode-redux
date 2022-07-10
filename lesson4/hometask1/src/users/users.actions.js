export const ADD_USER = 'USERS/ADD_USER';
export const DELETE_USER = 'USERS/DELETE_USER';

export const addUser = listOfUser => {
  return {
    type: ADD_USER,
    listOfUser,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
