import React from 'react';
import Header from './Header';
import { UserContext, userData } from './users-context';

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
        <UserContext.Provider value={this.state.userData}>
          <Header />
        </UserContext.Provider>
      </div>
    );
  }
}
export default App;
