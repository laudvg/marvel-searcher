import React, { Component } from 'react';
import './App.css';
import List from "./components/list.js"
import Search from "./components/search.js"
import Spidey from "./spidey.js"


class App extends Component {
  handleSearch = (search) => {
    console.log(search)
  }

  render() {
    return (
      <div className="App">
        <h1>Marvel search</h1>
        <Search handleSearch={this.handleSearch}/>
        <div>
          <List results={Spidey.data.results}/>
        </div>
      </div>
    );
  }
}


export default App;
