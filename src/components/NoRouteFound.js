import React from 'react'; 
import ContentWrapper from './contentwrapper';

function NoPage() {
    return(
        <ContentWrapper heading="No page">
            <h1>Page {window.location.href} not found</h1>
        </ContentWrapper>
    );

}

export default NoPage;
