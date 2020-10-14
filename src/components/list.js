import React, { Component } from 'react';
import ListItem from "../components/list-item.js"
import './list.css';

class List extends Component {
  render() {
    return (
      <div className="heroe-list">
        {this.props.results.map((superheroe, index)=> <ListItem superheroe={superheroe} key={index}/> )}
      </div>
        
      // <ListItem superheroe={this.props.results[0]}/>
    );

  }
}

export default List;