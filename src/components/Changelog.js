import React from 'react'; 
import ReactMarkdown from 'react-markdown';
import ContentWrapper from './contentwrapper';

const markdown = " # Adding ' some Text this is text ## New text";

function Changelog() {
    return (
        <ContentWrapper heading="Change log">
            <div> 
                <ReactMarkdown children={markdown}>
                    asdasd 'some dasjbhd ##askdjbhajb
                </ReactMarkdown>
            </div>
        </ContentWrapper>
    );
}

export default Changelog;