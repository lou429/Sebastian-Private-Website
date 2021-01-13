import React from 'react'; 
import './navlink.scss';

function NavLink(props) {
    return(
        <>
            <div className="navlink-container">
                <a href={props.href}>
                    {props.children}
                </a>
            </div>
        </>
    );
}

export default NavLink;