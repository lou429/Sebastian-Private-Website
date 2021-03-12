import React from 'react';
import BodyHeading from './BodyHeading.js';
import BodyContent from './BodyContent.js';
import './contentwrapper.scss';

// Content wrapper will store any component trying to modify the base content
function ContentWrapper(props) {
    return (
        <div className="content-container">
            <BodyHeading heading={props.heading}/>
            <BodyContent>{props.children}</BodyContent>
        </div>
    );
}

export default ContentWrapper;