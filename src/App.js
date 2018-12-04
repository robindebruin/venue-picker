import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {LocationSearch} from './modules/LocationSearch';

class App extends Component {

  // title;

  // constructor(){
  //   this.title = 'Robinio';
  // }

  render(title) {
    return (
      <div className="App">
        <LocationSearch></LocationSearch>
      </div>
    );
  }
}

export default App;
