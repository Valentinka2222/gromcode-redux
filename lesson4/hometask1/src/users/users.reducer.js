import { DELETE_USER, ADD_USER } from './users.actions';

const initialState = {
  usersList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.usersList;

    case DELETE_USER: {
      return null;
    }

    default:
      return state;
  }
};
export default userReducer;
