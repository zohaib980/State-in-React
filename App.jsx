import React, {Component} from 'react';
import Person from './Person';

class App extends Component {
  state = { 
    persons: [
      { name: 'zohaib', age: 24 },
      { name: 'yasir', age: 23 },
      { name: 'Ayaz', age: 22}
    ]
   }
  render() { 
    return ( 
      <div>
        <h1>1st App with Max use of State and Handeling State :)</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >Hobbies: Progrmaing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >Hobbies: Development</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >Hobbies: SEO</Person>
      </div>
     );
  }
}
 
export default App;