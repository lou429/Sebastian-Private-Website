import React from 'react';
import Card from './card';

function Development(props) {
    return (
        <div className="container">
            <div className="row">
                {/* Section for adding github account and socials */}
                <h1>Github account</h1>
                {/* Section to add recent projects, could be done through cards */}
            </div>
            <div className="row">
                <h1>Repos: 
                    <i id="repoCount"></i>
                </h1>
                <br/>
                <div className="dev-card-list-container">
                    <div className="dev-card-list">
                        {
                            props.repoList.map((repo) => {
                                // <Card date={repo.date} projectName={repo.projectName} projectUrl={repo.projectUrl} creatorName={repo.creatorName} creatorUrl={repo.creatorUrl} tagsUrl={repo.tagsUrl}/>
                                <Card {...repo} />
                            })
                        }
                        {/* <Card date="01-01-2020" projectName="Non est veniam laboris" creatorName="Sebastian Bednarz" creatorUrl="https://github.com/raegar"/>
                        <Card date="01-01-2020" projectName="Non est veniam laboris" creatorName="Sebastian Bednarz"/>
                        <Card date="01-01-2020" projectName="Non est veniam laboris" creatorName="Sebastian Bednarz"/>
                        <Card date="01-01-2020" projectName="Non est veniam laboris" creatorName="Sebastian Bednarz"/>
                        <Card date="01-01-2020" projectName="Non est veniam laboris" creatorName="Sebastian Bednarz"/>
                        <Card date="01-01-2020" projectName="Non est veniam laboris" creatorName="Sebastian Bednarz"/> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Development;