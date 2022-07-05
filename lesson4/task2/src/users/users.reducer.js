import { DELETE_USER, ADD_USER } from './users.actions';

const initialState = {
  usersList: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    }
    case DELETE_USER: {
      const newList = state.usersList.filter(user => user.id !== action.payload.userId);
      return {
        ...state,
        usersList: newList,
      };
    }

    default:
      return state;
  }
};
export default userReducer;
