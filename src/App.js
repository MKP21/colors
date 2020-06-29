import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Route, Switch, Redirect } from 'react-router-dom';
import PalleteList from './PaletteList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.findPalette = this.findPalette.bind(this);
  }

  findPalette(id) {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  }

  render() {
    return (

      <Switch>
        <Route exact path="/" render={() => <PalleteList palettes={seedColors} />} />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
        />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      //         <div>
      //   <Palette palette={generatePalette(seedColors[0])} />
      // </div>
    );
  }
}

export default App;
