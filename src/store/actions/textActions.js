import uuid from 'uuid';

export const addText = (message = '') => {
  return (dispatch, getState) => {
    const firestore = getFirestore();
    const id = uuid();
    firestore.collection('texts').add({
      id,
      message
    }).then(() => {
      dispatch({
        type: 'ADD_TEXT',
        text: {
          id,
          message
        }
      });
    }).catch((error) => {
      dispatch({ type: 'ADD_TEXT_ERROR', error });
    });
  };
};