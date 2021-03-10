import React from 'react'; 

//Loads body for the page 
function BodyContent(props) {
    return(
        <div className="content-body">
            {props.children}
        </div>
    );
}

export default BodyContent;