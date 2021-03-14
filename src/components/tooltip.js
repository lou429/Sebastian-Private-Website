import React from 'react'; 
import './tooltip.scss';

function Tooltip(props) {
    return(
        <div className="tooltip">
            {props.children}
            <span className="toolTipText">{props.text}</span>
        </div>
    );
}

export default Tooltip;