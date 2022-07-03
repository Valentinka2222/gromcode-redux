import { DELETE_USER, ADD_USER, initialState } from './store';

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userList: state.usersList.concat(action.payload.user),
      };
    case DELETE_USER:
      return {
        ...state,
        userList: state.usersList.filter(user => user.id !== action.payload.id),
      };

    default:
      return state;
  }
};
