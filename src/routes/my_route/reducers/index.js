import { MY_ROUTE_ACION } from '../constants';

const initialState = {
  actionCompleted: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_ROUTE_ACION:
      return Object.assign({}, state, {
        actionCompleted: true
      });
    default:
      return state;
  }
};
