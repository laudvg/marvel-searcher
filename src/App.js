import React, { Component } from 'react';
import './App.css';
import List from "./list"
import Spidey from "./spidey.js"


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Marvel search</h1>
        <input type="text" id="fname" name="fname" placeholder="Example: Spider-Man"/>
        <div>
          
          <List results={Spidey.data.results}/>
        </div>
      </div>
    );
  }
}


export default App;
