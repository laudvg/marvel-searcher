import React, { Component } from 'react';
import ListItem from "../components/list-item.js"
import {getHeroes} from "../services/heroes"
import './list.css';

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      heroes : props.results,
      isFetching: true,
    }
  }

  async componentDidMount () {
    this.setState({heroes: await getHeroes(), isFetching: false})
  }

  componentDidUpdate(prevProps) {
    if (this.props.results !== prevProps.results) {
      this.setState({heroes: this.props.results});
    }
  }

  render() {

    const{isFetching, heroes} = this.state;
    if (isFetching){
      return "loading"
    }
    
    return (
        heroes.map((oneHeroe, index) => <ListItem {...oneHeroe} key={index}/>)
    );

  }
}

export default List;