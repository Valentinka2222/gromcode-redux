import React from 'react';
import User from './User';
import Pagination from './Pagination';
import { connect } from 'react-redux';

import * as userActions from './users.actions';
import { usersListSelector, currentPageSelector } from './users.selector';

class UsersList extends React.Component {
  itemsPerPage = 3;

  render() {
    const { usersList, currentPage, nextPage, prevPage } = this.props;

    const usersToRender = usersList.slice(
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
  console.log(state.users);

  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  nextPage: userActions.goNext,
  prevPage: userActions.goPrev,
};
const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
