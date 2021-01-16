import React from 'react';
import NavLink from './navlink.js';
import $ from 'jquery';
import './navbar.scss';

// $(document).ready(function() {
//     $('.nav-link-source').each(function(index, obj) {
//         if($(obj).attr("href") === document.URL.split('/')[1])
//             $(this).attr('class', "nav-link-source-active");
//     })
// });

$(document).ready(function() {
    let url = (document.URL);
    url = "/" + url.split('/')[3];
    $('.nav-link-body').each(function() {
        $(this.childNodes[0]).attr('class', 'nav-link-src' + (url === $(this.childNodes[0]).attr('href') ? "-active" : ''));
    });
});

function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-content-container">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/dev">Development</NavLink>
                <NavLink href="/user">About me</NavLink>
                <NavLink href="/contact">Contact me</NavLink>
            </div>
            <div className="content-end">
                <div className="content-end-container">
                    <a href="https://github.com/lou429" target="_blank" rel="noopener noreferrer">
                        <img
                            id="github-profile"
                            src="https://github.com/lou429.png"
                            alt="Github profile"
                            height="40"
                            width="40"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;