import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {LocationSearch} from './modules/LocationSearch';
import SelectedLocations from './atoms/SelectedLocations';
import SelectedLocation from './atoms/SelectedLocation';


class App extends Component {

  // title;

  constructor(){
    super()
    this.savedLocations = ['test', 'tiet'];
    this.state = {
      location: {}
    }
  
  }

  onSelectLocation = location => {
    console.log(location)
    this.setState({location: location});
  }

  render(title) {
    return (
      <div className="App">
        <LocationSearch onSelect={val=>this.onSelectLocation(val)}></LocationSearch>
        {/* <SelectedLocations locations={this.savedLocations}></SelectedLocations> */}
        <SelectedLocation location={this.location}></SelectedLocation>
      </div>
    );
  }
}

export default App;
