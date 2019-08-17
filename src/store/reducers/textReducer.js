const initState = {
  texts: [
    {id: '1', message: 'Reducer'},
    {id: '2', message: 'Redux' }
  ]
};

const textReducer = (state = initState, action) => {
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