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
            <div className="content-container">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/dev">Development page</NavLink>
                <NavLink href="/user">About me</NavLink>
            </div>
            <div className="content-end">
                {/* <h1>Heading</h1> */}
            </div>
        </div>
    );
}

export default NavBar;