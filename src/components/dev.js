import React from 'react'; 
import { Octokit } from "@octokit/rest";
import Card from './card.js';


async function getGithubRepos() {
    const octokit = new Octokit();

    let repoList = [];

    await octokit.request('GET /users/{user}/repos',  {
        user: 'lou429',
        type: 'public'
    })
    .then(({ data }) => {
        data.forEach(repo => {
            if(!repo.private)
                repoList.push({id: repo.id, name: repo.name, url: repo.url, date:repo.created_at});
        });
    })
    .catch(({ data }) => {
        console.log(data);
    });
    
    let counter = 0; 
    repoList = repoList.map((repo) => {
        document.createElement("Card", )
        console.log(counter++ + " : " + repo.name + repo.date);
    });

    console.log(repoList);

    document.getElementById("repoCount").innerHTML = repoList.length;

    return repoList; 
}

function returnGithubRepos() {
    let RepoList = [{id: 1, name: "", url: "", date:""}];
    var repoList = getGithubRepos();
    console.log("got result");
    
    

    return RepoList;
}

function Development() {
    // let repo = repoList[0];
    // let singleRepo = repoList[0];
    // console.log("Single repo: " + singleRepo);

    return(
        <div className="container">
            <div className="row">
                {/* Section for adding github account and socials */}
                <h1>Github account</h1>
                {/* Section to add recent projects, could be done through cards */}
            </div>
            <div className="row">
                <h1>Repos: <i id="repoCount"></i></h1>
                <br/>
                <div className="dev-card-list-container">
                <div className="dev-card-list">
                {/* {
                    returnGithubRepos().forEach((data) => {
                        console.log(data);
                    })
                } */}
                <Card date="01-01-2020" name="Non est veniam laboris"/>
                <Card date="01-01-2020" name="Non est veniam laboris"/>
                <Card date="01-01-2020" name="Non est veniam laboris"/>
                <Card date="01-01-2020" name="Non est veniam laboris"/>
                <Card date="01-01-2020" name="Non est veniam laboris"/>
                <Card date="01-01-2020" name="Non est veniam laboris"/>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Development;