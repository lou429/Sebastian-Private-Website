import React, {useState, useEffect} from 'react';
import './navbarfooter.scss';
import 'animate.css';
import $ from 'jquery';


function NavbarFooter() {
    const [bannerText, setBannerText] = useState('');
    const [changeBanner, setChangeBanner] = useState(false);

    useEffect(function loadBanner() {
        async function getData() {
            await fetch('https://uselessfacts.jsph.pl/random.json?language=en')
                .then(response => response.json())
                .then(data => receiveCallback(data.text))
        }
        
        getData();
    }, [changeBanner]);

    //Use effect to wait a certain amount of time before loading new data
    useEffect(function bannerChange() {
        setTimeout(() => {
            setChangeBanner(!changeBanner);
        }, 5000);
    }, [bannerText, changeBanner]);

    function receiveCallback(data) {
        $('#footerText').removeClass('animate__fadeInLeft').addClass('animate__fadeOutRight');
        setTimeout(() => {
            $('#footerText').removeClass('animate__fadeOutRight').addClass('animate__fadeInLeft');
            setBannerText(data);
        }, 1200);

    }

    function navFooterOnClick() {
        localStorage.setItem('ICircleList', JSON.stringify(''));
    }

    return(
        <div className="navbar-footer-container" onClick={navFooterOnClick}>
            <h1 id='footerText' className='animate__animated animate__fadeInLeft animate_slower animation__delay 1.5s'>{bannerText}</h1>
        </div>
    );
}

export default NavbarFooter;