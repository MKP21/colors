import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';

class App extends React.Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[0]} />
      </div>
    );
  }
}

export default App;
