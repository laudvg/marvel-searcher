import React, { Component } from 'react';
import './search.css';

class LimitSelector extends Component {
  state = {
    perPage: 20,
  };

  changePerPage = () => {
    this.setState({ perPage: 44 });
    const event = {
      target: {value: 44}
    }
    this.props.onChangeLimit(event);
  }

  render() {
    return (
      <div className="limit-selector">
            <select> value={this.state.perPage}  name="limit" onChange={this.changePerPage}
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