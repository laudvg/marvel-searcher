import React, { Component } from 'react';
import './list-item.css';

class ListItem extends Component {
  render() {
    const data = this.props.superheroe
    const {thumbnail, name, description} = data;
    return (
      <div className="superheroe">
            <img className="thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} alt="superheroe"/>
            <h2 className="name">{name}</h2>
            <p className="description">{description}</p>
      </div>  
    );
  }
}

export default ListItem;