import React from 'react';
import '../App.css';

const MarvelBar = ({ name, thumbnail, description }) => (
  <div className="marvel-bar">
    <img className="marvel-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png" alt="Marvel" />
    <h1 className="marvel-search">SEARCH</h1>
  </div>
)

export default MarvelBar;