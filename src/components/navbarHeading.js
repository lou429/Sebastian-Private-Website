import React from 'react-router-dom';
import './navbarHeading.scss';

function NavbarHeading() {
    return(
        <>
            <div className="navbar-heading-container">
                <div className="navbar-heading-row">
                    <a href="https://github.com/lou429" target="_blank" rel="noopener noreferrer">
                        <img id="profile-picture" src="../../public/Resources/images/profile-picture.jpg" alt="Profile" height="120px" width="120px"/>
                    </a>
                </div>
            </div>
        </>
    );
}

export default NavbarHeading;