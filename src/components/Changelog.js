import React from 'react'; 
import ReactMarkdown from 'react-markdown';
import ContentWrapper from './contentwrapper';
import DirectionButton from './changelogButtons';
import ChangelogVersion from './Changelog-Version';
import './Changelog.scss';

function getPageCount() {
    return "1";
}

function getChangeLog(t) {
    return "#This is page: " + t; 
}

//TODO: could split the page into 2 sections and display the content accordingly
//Left side for choosing changelog, right side for message

function Changelog() {
    var currentPage = 1; 

    return (
        <div className="page-container">
            <ContentWrapper heading="Change log">
                <div className="changelog-content-wrapper"> 
                    <div className="change-log-ver-col">
                        <ChangelogVersion/>
                    </div>
                    <div className="change-log-info-col"> 
                        <ReactMarkdown children={getChangeLog(currentPage)}/>
                    </div>
                </div>
            </ContentWrapper>
            <div className="button-container">
                <DirectionButton direction="Left"/>
                <h6>{currentPage} / {getPageCount()}</h6>
                <DirectionButton direction="Right"/>
            </div>
        </div>
    );
}

export default Changelog;