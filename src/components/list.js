import React, { Component } from 'react';
import ListItem from "../components/list-item.js"
import './list.css';

class List extends Component {
  state = {
    heroes: this.props.heroes,
    isFetching: true
  }

  componentDidUpdate(prevProps) {
    if (this.props.isFetching !== prevProps.isFetching) {
      this.setState({isFetching: this.props.isFetching });
    }
    if (this.props.heroes !== prevProps.heroes) {
      this.setState({ heroes : this.props.heroes});
    }
  }

  render() {
   
   const{ isFetching, heroes } = this.state;

    if (isFetching){
      return "loading";
    }

    return (
        heroes.map((oneHero) => <ListItem {...oneHero} key={oneHero.id}/>)
    );

  }
}

export default List;