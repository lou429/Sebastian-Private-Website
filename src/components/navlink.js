import React from 'react';
import './navlink.scss';

function NavLink(props) {
    return (<a className="nav-link" href={props.href}>{props.children}</a>);
}

export default NavLink;