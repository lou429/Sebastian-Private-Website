import React from 'react'; 
import ReactMarkdown from 'react-markdown';
import ContentWrapper from './contentwrapper';
import DirectionButton from './changelogButtons';
import './Changelog.scss';

const markdown = " # Adding ' some Text this is text ## New text\nNew para"; //test

function getPageCount()
{
    return "1/1";
}


function Changelog() {
    return (
        <div className="page-container">
            <ContentWrapper heading="Change log">
                <div> 
                    <ReactMarkdown children={markdown}/>
                </div>
            </ContentWrapper>
            <div className="button-container">
                <DirectionButton direction="Left"/>
                <h6>{getPageCount()}</h6>
                <DirectionButton direction="Right"/>
            </div>
        </div>
    );
}

export default Changelog;