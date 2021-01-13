import React, { useState } from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

import User from './UserPage.js';
import SignIn from './SignInPage.js';

function Navbar(props) {
    let user = props.user;

    return (
        <Nav>
            <NavItem>
                <NavLink>
                    <i className="fa fa-home" aria-hidden="true"></i>
                </NavLink>
                <Button color="orange">button</Button>
                <NavLink>
                    {user ? <User user={user} /> : <SignIn/>}
                </NavLink>
            </NavItem>
        </Nav>
    );
}

export default Navbar;