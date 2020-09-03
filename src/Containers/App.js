import React, { Component } from 'react';
import './App.css';
import Per from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
//import Radium, { StyleRoot } from 'radium';
//import styled from 'styled-components';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;

//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `

class App extends Component {

  state = {
    persons: [
      { id: '1',name: 'Max', age: 28},
      { id: '2',name: 'Manu', age: 29},
      { id: '3',name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }


  // switchNameHandler = (newName) => {
  //   //console.log('Was clicked!');

  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28},
  //       { name: 'Manu', age: 29},
  //       { name: 'Stephanie', age: 27}
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons =[...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      'border': '1px solid blue',
      padding: '8px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}><Per click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        changed={(event) => this.nameChangedHandler(event, person.id)} /></ErrorBoundary>
          })}
          {/* <Per 
            name={this.state.persons[0].name} 
            age={Math.floor(Math.random()*30)} />
          <Per 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}> And very hungry</Per>
          <Per 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} /> */}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      }
    }

    //let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

      return (
        // <StyleRoot>
        <div className="App">
          <hr></hr>
          <p className={classes.join(' ')}>This is really working!</p>
          {/* <button style={style} onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button><br/><br/> */}
          <button style={style} onClick={() => this.togglePersonHandler()}>Toggle Person</button>
          {/* <StyledButton alt={this.state.showPersons} onClick={() => this.togglePersonHandler()}>Toggle Person</StyledButton> */}
          {persons}
          {
            /*this.state.showPersons === true ?
            <div>
              <Per 
                name={this.state.persons[0].name} 
                age={Math.floor(Math.random()*30)} />
              <Per 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Max!')}
                changed={this.nameChangedHandler}> And very hungry</Per>
              <Per 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
            </div> : null*/
          }
        </div>
        /* </StyleRoot> */
      );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}



export default /*Radium(App)*/ App;
