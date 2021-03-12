import React from 'react';
import ContentWrapper from './contentwrapper.js';
import './home.scss';

function Home() {
    return (
        <ContentWrapper heading="Home page">
            <h6>
                This website is a work in progress therefor it is not fully finished.  
            </h6>
            <br/>
            <h6>
                Most of the core features of this web app work as intended but bugs are to be expected
            </h6>
            <br/> 
            <h6>
                If you encounter any bugs please send a message on the contact page alongside with what you were doing that caused 
            </h6>
        </ContentWrapper>
    );
}

export default Home;