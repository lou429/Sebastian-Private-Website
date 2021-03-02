import React from 'react';
import NavLink from './navlink.js';
import $ from 'jquery';
import './navbar.scss';

function NavBar() {
    return (
        <div className="navbar-container">
             <div className="navbar-logo-container">
                <div className="navbar-logo">
                    <a href="https://github.com/lou429" target="_blank" rel="noopener noreferrer">
                        <img id="github-profile" src="https://github.com/lou429.png" alt="Github profile" height="40px" width="40px"/>
                    </a>
                </div>
            </div>
            
            <div className="nav-content-container">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/dev">Development</NavLink>
                <NavLink href="/user">About me</NavLink>
                <NavLink href="/contact">Contact me</NavLink>
            </div>
        </div>
    );
}

export default NavBar;