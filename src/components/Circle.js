import React from 'react';
import './Circle.scss';
import 'animate.css';

function generateRandNum(start, end) {
    return Math.floor(Math.random() * end) + start;
}

class ICircle {
    constructor(id) {
        const pos = generateRandNum(1, 4);
        this.id = 'circle-' + id;
        this.style = getRandomStyle(pos);
        this.className = getAnimationPosition(pos);
    }
}

function loadLocalStorage(object) {
    return JSON.parse(localStorage.getItem(object));
}

function saveLocalStorage(name, object) {
    localStorage.setItem(name, JSON.stringify(object));
}

function getRandomStyle(pos) {
    let xRand = generateRandNum(1, 49) + '%';
    let yRand = generateRandNum(1, 14) + '%';
    let size = generateRandNum(5, 20) + 'rem';

    switch(pos) { //pos
        case 1: //Top left
            return {
                height: size,
                width: size,
                left: xRand, 
                top: yRand
            }
        case 2: //Top Right
            return  {
                height: size,
                width: size,
                right: xRand, 
                top: yRand
            }
        case 3: //Bottom left
            return {
                height: size,
                width: size,
                left: xRand, 
                bottom: yRand
            }
        case 4: //Bottom right
            return {
                height: size,
                width: size,
                right: xRand, 
                bottom: yRand
            }
        default: 
            return null;
    }
}

function getAnimationPosition(pos) {
    let str = 'animate__fadeIn' + (pos > 2 ? 'Up' : 'Down') + 'Big';
    return 'animate__animated ' + str + ' animate__slower';
}

function loadLocalData() {
    var timeOfObj = loadLocalStorage('ICircleSetupTime');
    if(timeOfObj >0 && (new Date().getTime() - timeOfObj > 5*60*1000)) 
        return '';
    else  
        return new loadLocalStorage('ICircleList');
}

function newICircleRange(count) {
    let list = []
    for(let x = 0; x !== count; x++)
        list.push(new ICircle(x));
    saveLocalStorage('ICircleList', list);
    saveLocalStorage('ICircleSetupTime', new Date().getTime());
    return list; 
}

let CircleList =  loadLocalData();
// let CircleList = null;

function Circle(props) {
    return(
        <div id={props.id} className={props.className} style={props.style}/>
    );
}

function GetAllCircles() {
    return(
        <div className="circle-container">
            {CircleList === null || CircleList === '' ? newICircleRange(generateRandNum(2, 8)).map((circle, index) => (<Circle key={index} {...circle}/>)) : CircleList.map((circle, index) => (<Circle key={index} {...circle}/>)) }
        </div>
    );
}

export default GetAllCircles;