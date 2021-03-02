import React from 'react';
import './Circle.scss';

function generateRandomNumber(start, end) {
    return Math.floor(Math.random() * end) + start;
}

class ICircle {
    constructor(id) {
        this.id = id;
        this.style = getRandomStyle(id);
    }
}

function getRandomStyle(id) {
    let style; 
    let firstRand = generateRandomNumber(1, 15) + '%';
    let secondRand = generateRandomNumber(1, 15) + '%';

    switch(generateRandomNumber(1, 4)) {
        case 1: 
            style = {
                left: firstRand, 
                top: secondRand
            }
            break;
        case 2: 
            style = {
                right: firstRand, 
                top: secondRand
            }
            break; 
        case 3: 
            style = {
                left: firstRand, 
                bottom: secondRand
            }
            break;
        case 4: 
            style = {
                right: firstRand, 
                bottom: secondRand
            }
            break;
        default: 
            style = {
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