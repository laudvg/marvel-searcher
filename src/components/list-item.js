import React  from 'react';
import './list-item.css';

const ListItem = ({name, thumbnail, description}) => (
  <div className="superheroe">
    <h3 className="name">{name}</h3>
    <img className="thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} alt="superheroe"/>
    <p className="description">{description}</p>
  </div>
)

// class ListItem extends Component {
//   render() {
//     const data = this.props.superheroe
//     const {thumbnail, name, description} = data;
//     return (
//       <div className="superheroe">
//             <img className="thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} alt="superheroe"/>
//             <h2 className="name">{name}</h2>
//             <p className="description">{description}</p>
//       </div>  
//     );
//   }
// }

export default ListItem;