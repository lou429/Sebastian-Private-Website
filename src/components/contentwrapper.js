import React from 'react';
import BodyHeading from './BodyHeading.js'
import './contentwrapper.scss';


// Content wrapper will store any component trying to modify the base content
function ContentWrapper(props) {
    return (
        <div className="content-container">
            <BodyHeading heading={props.heading}/>
            <div className="content-body">
                {props.children}
            </div>
        </div>
    );
}

export default ContentWrapper;