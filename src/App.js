import React, { Component } from 'react';
import './App.css';
import List from "./components/list.js"
import Search from "./components/search.js"
import { getBySearch } from './services/heroes';
import LimitSelector from "./components/limit-selector"
import MarvelBar from "./components/marvel-fixed"

class App extends Component {
  state = { 
    heroes: {},
    limit: 20
  }

  handleSearch = async (search) => {
    this.setState({ heroes: await getBySearch(search, this.state.limit)})
    console.log(this.state);
  }

  changeLimitPerPage = (event) => this.setState({limit: event.target.value })

  render() {
    return (
      <div className="App">
        <MarvelBar/>
        <div className="search-bar">
          <Search handleSearch={this.handleSearch}/>
        </div>
        <LimitSelector onChangeLimit={this.changeLimitPerPage} />
        <div className="heroe-list">
          <List results={this.state.heroes}/>
        </div>
      </div>
    );
  }
}

export default App;
