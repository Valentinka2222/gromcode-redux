import React from 'react';
import Header from './Header';
import { UserDataContext, userData } from './userData-context';

class App extends React.Component {
  state = {
    userData: {
      name: userData.name,
      avatar_url: userData.avatar_url,
    },
  };
  render() {
    return (
      <div className="page">
        <UserDataContext.Provider value={this.state.userData}>
          <Header />
        </UserDataContext.Provider>
      </div>
    );
  }
}
export default App;
