import React from 'react'; 

function BodyContent(props) {
    return(
        <div className="content-body">
            {props.children}
        </div>
    );
}

export default BodyContent;