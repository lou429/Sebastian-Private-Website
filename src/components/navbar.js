import React, { useState } from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Link from 'react-router-dom';

function Navbar(props) {
    let user = props.user;

    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    const recentProjects = props.recentProjects;

    return (
        <Nav>
            <NavItem>
                <NavLink>
                    <i className="fa fa-home" aria-hidden="true"></i>
                </NavLink>
                <Button color="orange">button</Button>
                {/* <NavLink>
                    {user ? <User user={user} /> : <SignIn/>}
                </NavLink> */}
                <NavLink>
                    <Link to="/">Home</Link> 
                </NavLink>
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        Development    
                    </DropdownToggle>   
                    <DropdownMenu>
                        <DropdownItem header>Socials</DropdownItem>
                        <DropdownItem><Link to="/dev">Github</Link></DropdownItem>   
                        <DropdownItem>Instagram</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem header>Recent projects</DropdownItem>
                        {recentProjects.array.forEach(project => {
                            <DropdownItem>{project.Name}</DropdownItem>
                        })}
                    </DropdownMenu>                 
                </ButtonDropdown>
                <NavLink>
                    <Link to="/user">My page</Link> 
                </NavLink>
            </NavItem>
        </Nav>
    );
}

export default Navbar;