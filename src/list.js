import React, { Component } from 'react';
import ListItem from "./list-item"
import './list.css';

class List extends Component {
  render() {
    return (
      <ListItem superheroe={this.props.results[0]}/>
    );

  }
}

export default List;