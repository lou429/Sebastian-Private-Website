import React from 'react';
import NavLink from './navlink.js';
import './navbar.scss';

function NavBar() {
    return (
        <div className="navbar-container">           
            <div className="nav-content-container">
                <ul>
                    <li>
                        <NavLink href="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink href="/dev">Dev page</NavLink>
                    </li>
                    <li>
                        <NavLink href="/user">About me</NavLink>
                    </li>
                    <li>
                        <NavLink href="/contact">Contact me</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;