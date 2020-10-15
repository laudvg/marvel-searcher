import React, { Component } from 'react';
import './App.css';
import { getHeroes } from './services/apiCall';
import List from './components/list'
import Search from './components/search'
import LimitSelector from './components/limit-selector'
import MarvelBar from './components/marvel-fixed'


class App extends Component {
  state = {
    heroes: [],
    limit: 10,
    searchName: '',
    isFetching: false
  }

  fetchData = async () => {
    this.setState({ isFetching: true });
    const heroesData = await getHeroes(this.state.searchName, this.state.limit);
    this.setState({ heroes: heroesData, isFetching: false });
  }

  handleSearch = (searchNameValue) => {
    if (searchNameValue !== this.state.searchName) {
      this.setState({ searchName: searchNameValue }, () => this.fetchData());
    }
  }

  changeLimitPerPage = (limitValue) => {
    const previousLimit = this.state.limit;
    this.setState({ limit: limitValue }, () => {
      // This comprobation is made to avoid calling the Api if the number of heroes is reduced
      if (limitValue < previousLimit) {
        this.setState({ heroes: this.state.heroes.slice(0, limitValue) });
      } else {
        this.fetchData();
      }
    });
  }

  componentDidMount() {
    this.fetchData();
  }


  render() {
    return (
      <div className='App'>
        <MarvelBar />
        <Search className='search-bar' handleSearch={this.handleSearch} />
        <LimitSelector limit={this.state.limit} onChangeLimit={this.changeLimitPerPage} />
        <div className='heroe-list'>
          <List isFetching={this.state.isFetching} heroes={this.state.heroes} />
        </div>
      </div>
    );
  }
}

export default App;
