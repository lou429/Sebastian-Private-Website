import NavbarLinks from './Navbarlink.js';
import NavbarHeading from './NavbarHeading.js';
import NavbarFooter from './Navbarfooter.js';
import './Navbar.scss';

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