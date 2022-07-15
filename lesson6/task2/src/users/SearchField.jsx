import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as userActions from './users.action';

class SearchField extends Component {
  state = {
    userName: '',
  };
  onChange = event => {
    this.setState({ userName: event.target.value });
  };
  handleUserSearch = () => {
    this.props.fetchUserData(this.state.userName);
  };

  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          value={this.state.userName}
          className="name-form__input"
          onChange={this.onChange}
        />
        <button className="name-form__btn btn" onClick={this.handleUserSearch}>
          Show
        </button>
      </div>
    );
  }
}

SearchField.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
};

const mapDispatch = {
  fetchUserData: userActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
