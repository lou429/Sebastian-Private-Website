import React from 'react';
import './navlink.scss';
import $ from 'jquery';

function NavLink(props) {
    return (
        <div className="nav-link-body">
            <a href={props.href}>
                {props.children}
            </a>
        </div>
    );
}

export default NavLink;