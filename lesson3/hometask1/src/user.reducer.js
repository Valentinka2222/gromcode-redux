import { REMOVE_USER, SET_USER } from './user.actions';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload.userData,
      };
    }
    case REMOVE_USER: {
      return {
        ...state,
        user: delete [action.payload[0]],
      };
    }

    default:
      return state;
  }
};
export default userReducer;
