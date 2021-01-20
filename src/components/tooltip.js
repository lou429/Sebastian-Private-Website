import React from 'react'; 
import './tooltip.scss';

function Tooltip(props) {
    return(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <div className="tooltip">
            {props.children}
            <span className="toolTipText">{props.text}</span>
        </div>
    );
}

export default Tooltip;