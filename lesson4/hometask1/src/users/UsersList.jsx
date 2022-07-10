import React from 'react';
import User from './User';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import * as usersListActions from './userList.actions';
import * as userActions from './users.actions';
import { usersList } from '../store';
class UsersList extends React.Component {
  itemsPerPage = 3;


  render() {
    const { createUsersList, currentPage } = this.props;
    const usersToRender = createUsersList(usersList).usersList.slice(
      this.itemsPerPage * (currentPage ),
      (currentPage ) * this.itemsPerPage + this.itemsPerPage,
    );

    return (
      <div>
        <Pagination
          currentPage={currentPage}
          goNext={this.props.nextPage}
          goPrev={this.props.prevPage}
          totalItems={usersToRender.length}
          itemsPerPage={this.itemsPerPage}
        />

        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  console.log(state.users)
  return {
    users: state.users,
    currentPage: state.currentPage,
  };
};

const mapDispatch = {
  nextPage: usersListActions.nextPage,
  prevPage: usersListActions.prevPage,
  createUsersList: userActions.addUser,
  deleteUsersList: userActions.deleteUser,
};
const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
