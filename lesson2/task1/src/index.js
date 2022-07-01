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
const counterReducer = (state = 0, actions) => {
  switch (actions.type) {
    case 'COUNTER/INCREMENT':
      return state + 1;
    case 'COUNTER/DECREMENT':
      return state - 1;

    default:
      return state;
  }
};

export { increment, decrement };
