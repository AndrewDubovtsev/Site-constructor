const INITIAL_STATE = {
  texts: [
    { id: '1', message: 'Reducer' },
    { id: '2', message: 'Redux' }
  ]
};

const textReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('Add text error', action.error);
      return state;
    default:
      return state;
  }
};

export default textReducer;
