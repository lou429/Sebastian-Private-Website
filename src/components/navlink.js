import React from 'react'; 
import './navlink.scss';

function NavLink(props) {
    return(
        <>
            <div className="link-body">
                <a href={props.href}>
                    {props.children}
                </a>
            </div>
        </>
    );
}

export default NavLink;