import { actionTypes } from 'rootDir/actions';

const initialState = {
  input: '',
  items: []
};

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_TODO_ITEM:
      return Object.assign({}, state, {
        input: '',
        items: [
          ...state.items,
          {
            id: Date.now(),
            text: action.payload
          }
        ]
      });
    case actionTypes.REMOVE_TODO_ITEM:
      return Object.assign({}, state, {
        items: state.items.filter(i => i.id != action.payload)
      });
    case actionTypes.TODO_INPUT_CHANGE:
      return Object.assign({}, state, {
        input: action.payload
      });
    default:
      return state;
  }
};

export default todoReducer;
