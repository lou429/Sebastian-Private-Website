import React from 'react';
import './navbarlinks.scss';

function NavLink(props) {
    let objName = props.href === window.location.pathname ? 'nav-link-active' : 'nav-link';
    return (<a className={objName} href={props.href}>{props.children}</a>);
}

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