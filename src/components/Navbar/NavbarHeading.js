import React from 'react-router-dom';
import './NavbarHeading.scss';

function NavbarHeading() {
    return(
        <>
            <div className="navbar-heading-container">
                <div className="navbar-heading-row">
                    <a href="https://github.com/lou429" target="_blank" rel="noopener noreferrer">
                        <img id="github-profile" src="https://github.com/lou429.png" alt="Github profile" height="120px" width="120px"/>
                    </a>
                </div>
            </div>
        </>
    );
}

export default NavbarHeading;