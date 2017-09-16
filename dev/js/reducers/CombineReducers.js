import { combineReducers } from 'redux';
import Users from './users/UserReducer';
import ActiveUser from './users/ActiveUserReducer';

export default combineReducers({
    Users,
    ActiveUser,
});
