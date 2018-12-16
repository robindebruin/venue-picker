import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {LocationSearch} from './modules/LocationSearch';
import SelectedLocations from './atoms/SelectedLocations';


class App extends Component {

  // title;

  constructor(){
    super()
    this.savedLocations = ['test', 'tiet']
  }

  render(title) {
    return (
      <div className="App">
        <LocationSearch></LocationSearch>
        <SelectedLocations locations={this.savedLocations}></SelectedLocations>
      </div>
    );
  }
}

export default App;
