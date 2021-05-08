import React from 'react'; 
import './changelogButtons.scss'

function MarkDownButton(props) {
    function Navigate(t) {
        alert(t);
    }

    return(
        <div className={'changelog-navigation ' + props.direction} onClick={() => Navigate(props.direction)}>
            <h6>{props.direction === "Left" ? "<" : ">"}</h6>
        </div>
    );
}

export default MarkDownButton; 