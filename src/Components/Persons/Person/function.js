import React, { useState } from 'react';
import './App.css';
import Per from './Person/Person';

const App = props => {
  const [personsState, SetPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  // state = {
  //   persons: [
  //     { name: 'Max', age: 28},
  //     { name: 'Manu', age: 29},
  //     { name: 'Stephanie', age: 26}
  //   ],
  //   otherState: 'some other value'
  // }

  const switchNameHandler = () => {
    //console.log('Was clicked!');

    SetPersonsState({
      persons: [
        { name: 'Maximilian', age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ]
    });
    setOtherState({
      otherState: 'other state set'
    })
  }

  return (
    <div className="App">
      <hr></hr>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Per name={personsState.persons[0].name} age={Math.floor(Math.random()*30)} />
      <Per name="Unknown" age={personsState.persons[1].age}> And very hungry</Per>
      <Per name="Cellpie" age="19" />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}



export default App;
