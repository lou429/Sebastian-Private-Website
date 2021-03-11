import React from 'react';
import './navbarfooter.scss';

function NavbarFooter() {
    function navFooterOnClick() {
        localStorage.setItem('ICircleList', JSON.stringify(''));
    }
    return(
        <div className="navbar-footer-container" onClick={navFooterOnClick}>
            <h1>Nav footer</h1>
        </div>
    );
}

export default NavbarFooter;