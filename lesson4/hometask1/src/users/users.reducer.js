import { ADD_USER } from './users.actions';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_USER:
      return { usersList: action.usersList};

    default:
      return state;
  }
};
export default userReducer;
