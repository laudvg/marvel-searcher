import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  constructor (props){
    super(props)

    this.state = {search: ""}
  }

  handleChange = (e) => {
    this.setState({search:e.target.value})
  }
  render() {
    const {handleSearch} = this.props;
    const {search} = this.state

    return(
      <div className="search-bar">
        <input 
        value={search}
        onChange={this.handleChange} 
        className="input" 
        type="text" id="fname" name="fname" placeholder="Example: Spider-Man"
        />
        <button className="search-button" onClick={()=> handleSearch(search)}>Search</button>
      </div>
    )
  }
}

export default Search;