import React, { Component } from 'react';
import './search.css';


class LimitSelector extends Component {
  state = {
    limit: this.props.limit,
  };

  changeLimit = (event) => {
    this.setState({ limit: event.target.value });
    this.props.onChangeLimit(event.target.value);
  }

  render() {
    return (
      <div className="limit-selector">
            <select value={this.state.limit} onChange={this.changeLimit}>
              <option value={10}>10 superheroes</option>
              <option value={25}>25 superheroes</option>
              <option value={50}>50 superheroes</option>
              <option value={100}>100 superheroes</option>
            </select>
      </div>
    );
  }
}

export default LimitSelector;