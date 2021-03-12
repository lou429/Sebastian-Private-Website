import React, {useState, useEffect} from 'react';
import './navbarfooter.scss';
import 'animate.css';
import $ from 'jquery';

let loadObject = (objName) => JSON.parse(localStorage.getItem(objName));
let saveObject = (objName, object) => localStorage.setItem(objName, JSON.stringify(object));
let defaultWaitTime = 30000;

function NavbarFooter() {
    const [bannerText, setBannerText] = useState('');
    const [changeBanner, setChangeBanner] = useState(false);

    useEffect(function loadBanner() {
        //Method to run API call
        async function getData() {
            await fetch('https://uselessfacts.jsph.pl/random.json?language=en')
                .then(response => response.json())
                .then(data => receiveCallback(data.text))
        }

        if(loadObject('randomFact').length > 1)
        {
            setTimeout(() => {
                getData();
            }, defaultWaitTime);
        }
        else 
            getData();

        //Callback for when data is received, the method also changes the animation of an object
        function receiveCallback(data) {
            if(data.length > 80)
                getData();
            else {
                saveObject('randomFact', data); //Save last received result to have it load on page refresh
                $('#footerText').removeClass('animate__slideInLeft').addClass('animate__slideOutRight').addClass('animate__delay-0s');
            
                setTimeout(() => {
                    $('#footerText').removeClass('animate__slideOutRight').addClass('animate__slideInLeft');
                    setBannerText(data);
                }, 1200);
            }
        }
    }, [changeBanner]);

    //Use effect to wait a certain amount of time before loading new data
    useEffect(function bannerChange() {
        setTimeout(() => {
            setChangeBanner(!changeBanner);
        }, defaultWaitTime);
    }, [bannerText, changeBanner]);

    function loadNewResult() {
        setChangeBanner(!changeBanner);
    }

    return(
        <div className="navbar-footer-container" onClick={loadNewResult}>
            <h1 id='footerText' className='animate__animated animate__fadeInLeft animate_slower animation__delay 1.5s'>{bannerText ? bannerText : loadObject('randomFact')}</h1>
        </div>
    );
}

export default NavbarFooter;