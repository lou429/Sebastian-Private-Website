import React, { useState } from 'react';
import NavLink from './navlink.js';
import './navbar.scss';

function NavBar(props) {
    // let user = props.user;

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

    // const recentProjects = props.recentProjects;

    return (
        <div className="navbar">
            <div className="nav-content-container">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/dev">Development</NavLink>
                <NavLink href="/user">About me</NavLink>
                <NavLink href="/contact">Contact me</NavLink>
            </div>
            <div className="content-end">
                <a href="https://github.com/lou429" target="_blank" rel="noopener noreferrer">
                    <img id="github-profile" src="https://github.com/lou429.png" alt="Github profile" height="40" width="40"/>
                </a>
            </div>
        </div>
    );
}

export default NavBar;