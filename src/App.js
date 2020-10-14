import React, { Component } from 'react';
import List from "./list"
import './App.css';

const spidey = {
    "code": 200,
    "status": "Ok",
    "copyright": "© 2020 MARVEL",
    "attributionText": "Data provided by Marvel. © 2020 MARVEL",
    "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2020 MARVEL</a>",
    "etag": "d141596eb68c3822604d1529be9793bd16887808",
    "data": {
        "offset": 0,
        "limit": 1,
        "total": 13,
        "count": 1,
        "results": [
            {
                "id": 1009610,
                "name": "Spider-Man",
                "description": "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.",
                "modified": "2020-07-21T10:30:10-0400",
                "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
                    "extension": "jpg"
                },
              }
            ]
          }
      
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Marvel search</h1>
        <input type="text" id="fname" name="fname" placeholder="Example: Spider-Man"/>
        <List results={spidey.data.results}/>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     const name = spidey.data.results[0].name
//     const {thumbnail} = spidey.data.results[0];
//     const description = spidey.data.results[0].description;
//     return (
//       <div className="App">
//         <h1>Marvel search</h1>
//         <input type="text" id="fname" name="fname" placeholder="Example: Spider-Man"/>
//         <div>
//           <h2>{name}</h2>
//           <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="superheroe"/>
//           <p>{description}</p>
//         </div>
//       </div>
//     );

//   }

// }

export default App;
