import React from 'react'; 
import ReactMarkdown from 'react-markdown';
import ContentWrapper from './contentwrapper';
import DirectionButton from './changelogButtons';

const markdown = " # Adding ' some Text this is text ## New text"; //test 

function getPageCount()
{
    return "";
}


function Changelog() {
    return (
        <ContentWrapper heading="Change log">
            <div> 
                <ReactMarkdown children={markdown}/>

                <DirectionButton direction="Left"/>
                {getPageCount()}
                <DirectionButton direction="Right"/>
            </div>
        </ContentWrapper>
    );
}

export default Changelog;