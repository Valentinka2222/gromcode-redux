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
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'COUNTER/INCREMENT':
      return state + 1;
    case 'COUNTER/DECREMENT':
      return state - 1;

    default:
      return state;
  }
};

export { increment, decrement };
