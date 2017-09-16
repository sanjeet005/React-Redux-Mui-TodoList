import { USER_DATA } from '../../constants/ActionTypes';

export default function reducer(state={
    data: null,
    fetching: true
  }, action) {

  switch(action.type) {
    case USER_DATA:
      return action.payload;
      break;
  }
  return state;
}
