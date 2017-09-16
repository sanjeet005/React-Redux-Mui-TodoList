import React from 'react';
import UserList from '../containers/userList';
import UserDetails from '../containers/userDetails';
require('../../scss/style.scss');

const ListComponent = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    </div>
);

export default ListComponent;
