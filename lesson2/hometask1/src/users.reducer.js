import { DELETE_USER, ADD_USER, initialState } from './store';

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.user],
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload.id),
      };

    default:
      return state;
  }
};
