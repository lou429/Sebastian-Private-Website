import React, {useState, useEffect} from 'react';
import './Circle.scss';
import 'animate.css';

function generateRandNum(start, end) {
    return Math.floor(Math.random() * end) + start;
}

let loadObject = (objName) => JSON.parse(localStorage.getItem(objName));
let saveObject = (objName, object) => localStorage.setItem(objName, JSON.stringify(object));

class ICircle {
    constructor(id, animation = true) {
        const pos = generateRandNum(1, 4);
        this.id = 'circle-' + id;
        this.style = getRandomStyle(pos);
        this.className = animation ? getAnimationPosition(pos) : 'Circle';

        // Set random position of the circle
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

        // set animation position of animation
        function getAnimationPosition(pos) {
            return 'animate__animated animate__fadeIn' + (pos > 2 ? 'Up' : 'Down') + 'Big animate__slower';
        }   
    }
}

// Load circles saved in local storage 
function loadLocalData() {
    var timeOfObj = loadObject('ICircleSetupTime');
    if(timeOfObj > 0 && (new Date().getTime() - timeOfObj >= 5*60*1000)) 
        return loadObject('ICircleList');
    else  
        return newICircleRange(generateRandNum(1,8)); 
}

// Generate a new range of circles 
function newICircleRange(count) {
    let list = []
    for(let x = 0; x !== count; x++)
        list.push(new ICircle(x));
    let tempList = []
    for(let x = 0; x !== count; x++)
        tempList.push(new ICircle(x, false));
    list = tempList;
    saveObject('ICircleList', list);
    saveObject('ICircleSetupTime', new Date().getTime());
    return list; 
}

// Render a singular circle
function Circle(props) {
    return(
        <div id={props.id} className={props.className} style={props.style}/>
    );
}

function GetAllCircles() {
    const [circleList, setCircleList] = useState([]);

    useEffect(function loadCircleInfo() {
            return setCircleList(loadLocalData());
    }, [circleList.length]);

    return(
        <div className="circle-container">
            {circleList === null || circleList === '' ? newICircleRange(generateRandNum(2, 8)).map((circle, index) => (<Circle key={index} {...circle}/>)) : circleList.map((circle, index) => (<Circle key={index} {...circle}/>)) }
        </div>
    );
}

export default GetAllCircles;