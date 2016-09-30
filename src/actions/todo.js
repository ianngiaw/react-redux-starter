import { actionTypes } from './';

export const addTodo = text => dispatch => {
  dispatch({type: actionTypes.ADD_TODO_ITEM, payload: text});
};

export const removeTodo = id => dispatch => {
  dispatch({type: actionTypes.REMOVE_TODO_ITEM, payload: id});
};

export const changeInput = text => dispatch => {
  dispatch({type: actionTypes.TODO_INPUT_CHANGE, payload: text});
};
