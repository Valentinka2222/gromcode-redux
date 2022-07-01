const increment = () => {
  return {
    type: 'COUNTER/INCREMENT',
  };
};
const decrement = () => {
  return {
    type: 'COUNTER/DECREMENT',
  };
};
const counterReducer = (store = 0, action) => {
  switch (action.type) {
    case 'COUNTER/INCREMENT':
      return store + 1;
    case 'COUNTER/DECREMENT':
      return store - 1;

    default:
      return store;
  }
};

export { increment, decrement };
