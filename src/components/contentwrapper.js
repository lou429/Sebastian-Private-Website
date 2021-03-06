import React from 'react';
import './contentwrapper.scss';


// Content wrapper will store any component trying to modify the base content
function ContentWrapper(props) {
    return (
        <div className="content-container">
            <div className="content-heading">
                <h1>{props.heading}</h1>
            </div>
            <div className="content-body">
                {props.children}
            </div>
        </div>
    );
}

export default ContentWrapper;