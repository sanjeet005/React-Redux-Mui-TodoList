import { USER_SELECTED } from '../../constants/ActionTypes';

export default function reducer(state={
    data: null,
    fetching: true
  }, action) {

  switch(action.type) {
    case USER_SELECTED:
      return action.payload;
      break;
  }
  return state;
}
