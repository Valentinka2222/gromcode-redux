import React from 'React';
import ThemedButton from './ThemedButton';

class App extends React.Component {
  render() {
    return (
      <>
        <ThemedButton>Dynamic Theme</ThemedButton>
        <ThemedButton>Default Theme</ThemedButton>
      </>
    );
  }
}
export default App;
