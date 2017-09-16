import React from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends React.Component {
    render() {
      let user = this.props.user.data;
        if (!user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <h3>{user.first} {user.last}</h3>
                <p><strong>Age: {user.age}</strong></p>
                <p><strong>Description: {user.description}</strong></p>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.ActiveUser
    };
}

export default connect(mapStateToProps)(UserDetail);
