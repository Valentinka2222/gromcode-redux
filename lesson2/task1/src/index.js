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
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

export { increment, decrement };
