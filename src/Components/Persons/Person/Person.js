import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

//import Radium from 'radium';
///import styled from 'styled-components';

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0px 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 600px) {
//         width: 450px;
//         background: blue;
//     }
// `;

class Person extends Component {
    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px'
    //     }
    // }

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {

        console.log('[Person.js] rendering...');
    // const rnd = Math.random();
    
    //     if (rnd > 0.7) {
    //         throw new Error( 'Something went wrong' );
    //         //console.log(rnd);
    //     }
    // return (
    //     <div className={classes.Pest} /*style={style}*/>
    //     {/* <StyledDiv> */}
    //         <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old</p>
    //         <p>{this.props.children}</p>
    //         <input type="text" onChange={this.props.changed} value={this.props.name} />
    //     {/* </StyledDiv> */}
    //     </div>
    // );
//     return (<React.Fragment>
//         <p key="1" onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old</p>
//         <p key='2'>{this.props.children}</p>
//         <input key='3' type="text" onChange={this.props.changed} value={this.props.name} />
//         </React.Fragment>);
// }
    return (<Aux>
            {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
            {/* <AuthContext.Consumer>
                {context => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
            </AuthContext.Consumer> */}
            {/* {this.props.isAuth ? <p key='0'>Authenticated!</p> : <p key='0'>Please log in</p>} */}
            <p key="1" onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old</p>
            <p key='2'>{this.props.children}</p>
            <input key='3' 
            //ref={(inputEl) => {this.inputElement = inputEl}} 
            ref={this.inputElementRef}
            type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>);
    }
    
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default /*Radium(person)*/ withClass(Person, classes.Pest);