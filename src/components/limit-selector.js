import React, { Component } from 'react';
import './search.css';

class LimitSelector extends Component {
  state = {
    limit: 20,
  };

  changeLimit = (event) => {
    this.setState({ limit: event.target.value });
    this.props.onChangeLimit(event);
  }

  render() {
    return (
      <div className="limit-selector">
            <select value={this.state.limit} onChange={this.changeLimit}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
            </select>
      </div>
    );
  }
}

export default LimitSelector;