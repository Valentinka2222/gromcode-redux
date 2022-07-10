import React from 'react';
import User from './User';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import * as usersListActions from './pagination.actions';
import * as userActions from './users.actions';
import { users } from '../usersList';
class UsersList extends React.Component {
  itemsPerPage = 3;

  newUser = this.props.createUsersList(users);

  render() {
    const { currentPage, nextPage, prevPage } = this.props;

    const usersToRender = this.newUser.usersList.slice(
      this.itemsPerPage * currentPage,
      currentPage * this.itemsPerPage + this.itemsPerPage,
    );

    return (
      <div>
        <Pagination
          currentPage={currentPage}
          goNext={() => nextPage()}
          goPrev={() => prevPage()}
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
    usersList: state.usersList,
    currentPage: state.currentPage,
  };
};

const mapDispatch = {
  nextPage: usersListActions.nextPage,
  prevPage: usersListActions.prevPage,
  createUsersList: userActions.addUser,
};
const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
