import React, { useState } from 'react';
import NavLink from './navlink.js';
import './navbar.scss';

function NavBar(props) {
    // let user = props.user;

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

    // const recentProjects = props.recentProjects;

    return (
        <div className="navbar-container">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/dev">Development page</NavLink>
            <NavLink href="/user">About me</NavLink>
        </div>
    );
}

export default NavBar;