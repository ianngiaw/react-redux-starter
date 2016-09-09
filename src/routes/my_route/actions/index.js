import { MY_ROUTE_ACION } from '../constants';

export const myAction = () => {
  return dispatch => {
    dispatch({ type: MY_ROUTE_ACION });
  };
};

export const actionCreators = {
  myAction
};
