import React, { Component } from 'react';
import ListItem from "../components/list-item.js"
import {getHeroes} from "../services/heroes"
import './list.css';

class List extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      heroes : [],
      isFetch: true,
    }
  }

  async componentDidMount () {
    const responseJson = await getHeroes();
    this.setState({heroes:responseJson.data.results, isFetch:false})
  }

  render() {

    const{isFetch, heroes} = this.state;

    if (isFetch){
      return "loading"
    }
    
    // const oneHeroe = this.state.heroes[0]

    return (
        heroes.map((oneHeroe, index) => <ListItem {...oneHeroe} key={index}/>)

      // heroes.map((oneHeroe, index) => <ListItem name={oneHeroe.name} key={index}/>)


      // <div className="heroe-list">
      //   {this.props.results.map((superheroe, index)=> <ListItem superheroe={superheroe} key={index}/> )}
      // </div>
      //  <ListItem superheroe={this.props.results[0]}/>
    );

  }
}

export default List;