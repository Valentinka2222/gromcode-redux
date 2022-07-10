import { DELETE_USER, ADD_USER } from './users.actions';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_USER:
      return { usersList: action.listOfUser };

    default:
      return state;
  }
};
export default userReducer;
