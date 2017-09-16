import Data from './UserData';
import { USER_DATA, USER_SELECTED } from '../../constants/ActionTypes';

function userDataDispatch(data) {
  return {
    type: USER_DATA,
    payload: {data: data, fetching: false}
  };
}

export function getUserData() {
  return (dispatch) => {
    let userList = Data.userData.userList;
    dispatch(userDataDispatch(userList));
  };

}

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: USER_SELECTED,
        payload: {data: user, fetching: false}
    };
};
