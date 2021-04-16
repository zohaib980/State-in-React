import React, { useState} from 'react';
import Person from './Person';

const App = props => {
  const [ personState, setPersonState ] = useState({
    persons: [
      { name: 'zohaib', age: 24 },
      { name: 'yasir', age: 23 },
      { name: 'Ayaz', age: 22}
    ],
    otherState: 'some other value'
  })

const switchNameHandler = () => {
  console.log("Clicked");
  setPersonState( {
    // Don`t Do this: personState.person[0].name= 'Ali';
    persons: [
      { name: 'Tehmoor', age: 24 },
      { name: 'Zeeshan', age: 23 },
      { name: 'Naqash', age: 22}
    ]
  })
}

    return ( 
      <div>
        <h1>1st App with Max use of State and Handeling State :)</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} >Hobbies: Progrmaing</Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age} >Hobbies: Development</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age} >Hobbies: SEO</Person>
      </div>
     );
  }
 
export default App;