import React from 'react';
import User from './User';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import * as usersListActions from './userList.actions';
import * as userActions from './users.actions';
import { usersList } from '../store';
class UsersList extends React.Component {
  itemsPerPage = 3;

  prevBtnHandler = () => {
    this.props.prevPage();
  };
  nextBtnHandler = () => {
    this.props.nextPage();
  };

  render() {
    const { createusersList, currentPage } = this.props;
    const arr = createusersList(usersList);
    const usersToRender = arr.usersList.slice(
      this.itemsPerPage * currentPage,
      currentPage * this.itemsPerPage + this.itemsPerPage,
    );

    return (
      <div>
        <Pagination
          currentPage={currentPage}
          goNext={this.nextBtnHandler}
          goPrev={this.prevBtnHandler}
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
  return {
    users: state.users.usersList,
    currentPage: state.currentPage,
  };
};

const mapDispatch = {
  nextPage: usersListActions.nextPage,
  prevPage: usersListActions.prevPage,
  createusersList: userActions.addUser,
  deleteusersList: userActions.deleteUser,
};
const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
