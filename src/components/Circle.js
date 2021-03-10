import React from 'react';
import './Circle.scss';

function generateRandomNumber(start, end) {
    return Math.floor(Math.random() * end) + start;
}

class ICircle {
    constructor(id) {
        this.id = 'circle-' + id;
        this.style = getRandomStyle(id);
    }
}

function getRandomStyle(id) {
    let style; 
    let firstRand = generateRandomNumber(1, 50) + '%';
    let secondRand = generateRandomNumber(1, 7) + '%';
    
    let hw = generateRandomNumber(10, 25) + 'rem';

    switch(generateRandomNumber(1, 4)) {
        case 1: 
            style = {
                height: hw,
                width: hw,
                left: firstRand, 
                top: secondRand
            }
            break;
        case 2: 
            style = {
                height: hw,
                width: hw,
                right: firstRand, 
                top: secondRand
            }
            break; 
        case 3: 
            style = {
                height: hw,
                width: hw,
                left: firstRand, 
                bottom: secondRand
            }
            break;
        case 4: 
            style = {
                height: hw,
                width: hw,
                right: firstRand, 
                bottom: secondRand
            }
            break;
        default: 
            style = {
                height: hw,
                width: hw,
                left: firstRand, 
                top: secondRand
            }
            break; 
    }
    
    return style; 
}

function newICircleRange(count) {
    let list = []
    for(let x = 0; x !== count; x++)
        list.push(new ICircle(x));
    return list; 
}

let CircleList = [];
CircleList = newICircleRange(generateRandomNumber(2, 8));


function Circle(props) {
    return(
        <div id={props.id} className="circle" style={props.style}/>
    );
}

function GetAllCircles() {
    return(
        <div className="circle-container">
            {CircleList.map((circle, index) => (<Circle key={index} {...circle}/>))}
        </div>
    );
}

export default GetAllCircles;