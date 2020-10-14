import React, { Component } from 'react';
// import './list-item.css';

class ListItem extends Component {
  render() {
    const data = this.props.superheroe
    const {thumbnail, name, description} = data;
    return (
      <div>
          <h2>Name: {name}</h2>
          <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="superheroe"/>
          <p>Description:{description}</p>
      </div>      
    );

  }
}

export default ListItem;