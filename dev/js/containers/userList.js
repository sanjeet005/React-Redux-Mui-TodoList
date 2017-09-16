import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getUserData, selectUser} from '../actions/users/UserAction'


class UserList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: ''
      }

    }

    componentDidMount(){
      this.props.getUserData();
    }

    updateSearch(event){
      this.setState({search: event.target.value});
    }

    renderList() {
      // let userList = this.props.users.data;
      let userList = this.props.users.data.filter(
        (user) => {
          return ( user.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                   user.last.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                  );
        }
      );
      return userList.map((user) => {
          return (
              <li
                  key={user.id}
                  onClick={() => this.props.selectUser(user)}
               >
               {user.first} {user.last}
              </li>
          );
      });

    }

    render() {
      let fetching = this.props.users.fetching;

       return (
         <div>
           <input
             type = "text"
             placeholder="Search users"
             value = {this.state.search}
             onChange={(e) => {this.updateSearch(e)} }
            />
           <ul>
             {(
               () => {
                 if(fetching) {
                   return (<li><div>Loading</div></li>);
                 } else {
                   return (
                       this.renderList()
                   );
                 }
               }
              )()}
           </ul>
         </div>
       );

    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.Users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser, getUserData: getUserData}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
