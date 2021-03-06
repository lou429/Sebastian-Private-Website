import React from 'react';
import NavLink from './navlink.js';
import './navbarlinks.scss';

function NavbarLink() {
    return (
        <div className="nav-body-container">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/dev">Dev page</NavLink>
            <NavLink href="/user">About me</NavLink>
            <NavLink href="/contact">Contact me</NavLink>
        </div>
    );
}

export default NavbarLink;