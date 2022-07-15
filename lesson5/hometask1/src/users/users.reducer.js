import { USER_FILTER } from './users.actions';

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Justin',
  },
  {
    id: 'id-4',
    age: 45,
    name: 'Franklin',
  },
  {
    id: 'id-5',
    age: 45,
    name: 'John',
  },
  {
    id: 'id-6',
    age: 45,
    name: 'Andrew',
  },
  {
    id: 'id-7',
    age: 45,
    name: 'Pol',
  },
  {
    id: 'id-8',
    age: 45,
    name: 'Ron',
  },
  {
    id: 'id-9',
    age: 45,
    name: 'Harry',
  },
  {
    id: 'id-10',
    age: 45,
    name: 'Anna',
  },
];
const initialState = {
  usersList: users,
  filterText: '',
  count: 0,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FILTER: {
      const { filterText } = action;
      if (filterText.length === 0) {
        return {
          ...state,
          count: 0,
          filterText: '',
          usersList: users,
        };
      }
      const newUsersList = state.usersList.slice().filter(user => {
        if (user.name.toLowerCase().includes(filterText.toLowerCase())) {
          state.count = 0;
          return user;
        }
      });
      newUsersList.reduce((acc, user) => {
        acc += user ? (state.count += 1) : 0;
        return acc;
      }, state.count);

      return {
        ...state,
        filterText: filterText,
        usersList: newUsersList,
      };
    }
    default:
      return state;
  }
};
export default usersReducer;
