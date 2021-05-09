import React, {useState, useEffect, version} from 'react'; 
import ReactMarkdown from 'react-markdown';
import ContentWrapper from './contentwrapper';
import ChangelogVersion from './Changelog-Version';
import './Changelog.scss';
// import firebaseAdmin from 'firebase-admin';
import {firebase_app} from './firebase';

function getPageCount() {
    return "1";
}

function getChangeLog(t) {
    return "#This is page: " + t; 
}

//TODO: could split the page into 2 sections and display the content accordingly
//Left side for choosing changelog, right side for message

// const documentRef = firebase_app
//     .firestore()
//     .collection('Changelog')
//     .doc("6QCoZN1pptjnKY1vYQzR");

// yield documentRef.get({
//     some: 
// })


function Changelog() {
// Use effect for loading the new set of version info a and passing it down to the 2 children
// Child 1 should change the state while child 2 should load the state change 
const [versionNumber, setVersionNumber] = useState([]); 

const [selectedVersion, setSelectedVersion] = useState('');


    useEffect(function getChangelogVersion() {
        async function fetchVersionNumbers() {
            const firestore = firebase_app.firestore();
            const docRef = firestore.collection('Changelog').doc('6QCoZN1pptjnKY1vYQzR');
    
            docRef.get().then((data) => {
                console.log(data);
                setVersionNumber([...versionNumber, data])
            })
            .catch((exceptions) => {
                console.log(exceptions);
            })
        }

        fetchVersionNumbers(); 
    
    }, [])
    
    useEffect(function getChangelogText() {
        async function fetchChangelogText() {
            console.log(versionNumber);
        }

        fetchChangelogText();
    },[versionNumber]);



    var currentPage = 1; 
    
    return (
        <div className="page-container">
            <ContentWrapper heading="Change log">
                <div className="changelog-content-wrapper"> 
                    <div className="change-log-ver-col">
                        <ChangelogVersion data={versionNumber} />
                        {/* <div className="button-container">
                            <DirectionButton direction="Left"/>
                            <h6>{currentPage} / {getPageCount()}</h6>
                            <DirectionButton direction="Right"/>
                        </div> */}
                    </div>
                    <div className="change-log-info-col"> 
                        <ReactMarkdown children={getChangeLog(currentPage)}/>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
}

export default Changelog;