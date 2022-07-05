


import { REMOVE_USER, SET_USER } from './user.actions';

export const userReducer = (state ={}, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
       
       user: action.payload.userData,
      };
      
    }
    case REMOVE_USER: {
      return {
     
        
      
          user:delete[state.user[0]]
   
      };
    }

    default:
      return state;
  }
};
export default userReducer;
