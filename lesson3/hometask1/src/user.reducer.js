


import { REMOVE_USER, SET_USER } from './user.actions';
const initialState = {
  user: []
 }

export const userReducer = (state =initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
          ...state,
       user: [...state.user,action.payload.userData],
      };
      
    }
    case REMOVE_USER: {
      return {
      ...state,
        user: state.user.filter(user => user.id !== action.payload.userId),
      };
    }

    default:
      return state;
  }
};
export default userReducer;
