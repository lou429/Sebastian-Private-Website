import React from 'react';
import './Circle.scss';

function generateRandNum(start, end) {
    return Math.floor(Math.random() * end) + start;
}

class ICircle {
    constructor(id) {
        this.id = 'circle-' + id;
        this.style = getRandomStyle();
    }
}

function getRandomStyle() {
    let xRand = generateRandNum(1, 30) + '%';
    let yRand = generateRandNum(1, 10) + '%';
    let pos = generateRandNum(1, 4)    
    let size = generateRandNum(5, 20) + 'rem';
    
    let animName = (pos <= 2 ? (xRand < yRand ? pos === 1 ? "circleLeft" : "circleRight" : "circleTop") : (pos === 3 ? "circleTop" : "circleBottom"));

    let style; 

    switch(pos) {
        case 1: //Top left
            style = {
                height: size,
                width: size,
                left: xRand, 
                top: yRand,
                animation_name: animName
            }
            break;
        case 2: //Top Right
            style = {
                height: size,
                width: size,
                right: xRand, 
                top: yRand,
                animation_name: animName
            }
            break; 
        case 3: //Bottom left
            style = {
                height: size,
                width: size,
                left: xRand, 
                bottom: yRand,
                animation_name: animName
            }
            break;
        case 4: //Bottom right
            style = {
                height: size,
                width: size,
                right: xRand, 
                bottom: yRand,
                animation_name: animName
            }
            break;
        default: 
            style = {
                height: size,
                width: size,
                left: xRand, 
                top: yRand,
                animation_name: animName
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
CircleList = newICircleRange(generateRandNum(2, 8));


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