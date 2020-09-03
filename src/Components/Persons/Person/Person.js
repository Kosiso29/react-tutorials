import React from 'react';
import classes from './Person.module.css';

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

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px'
    //     }
    // }
    const rnd = Math.random();
    
        if (rnd > 0.7) {
            throw new Error( 'Something went wrong' );
            //console.log(rnd);
        }
    return (
        <div className={classes.Pest} /*style={style}*/>
        {/* <StyledDiv> */}
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        {/* </StyledDiv> */}
        </div>
    );
};

export default /*Radium(person)*/ person;