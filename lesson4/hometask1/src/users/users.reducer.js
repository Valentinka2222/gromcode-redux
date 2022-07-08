import { DELETE_USER, ADD_USER } from './users.actions';

const userReducer = (state = [], action) => {
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