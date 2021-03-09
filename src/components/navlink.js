import React from 'react';
import './navlink.scss';

function NavLink(props) {
    function getClassName() {
        console.log(window.location.href);
        return window.location.href; 
    }

    let className = getClassName();
    
    return (<a className={className} href={props.href}>{props.children}</a>);
}

export default NavLink;