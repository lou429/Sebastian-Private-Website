import NavbarLinks from './navbarlink.js';
import NavbarHeading from './navbarHeading.js';
import NavbarFooter from './navbarfooter.js';
import './navbar.scss';

function NavBar() {
    return (
        <div className="nav-wrapper">
            <div className="nav-heading">
                <NavbarHeading/>
            </div>
            <div className="nav-body">
                <NavbarLinks/>
            </div>
            <div className="nav-footer">
                <NavbarFooter/>
            </div>
        </div>
    );
}

export default NavBar; 