import React from 'react'; 
import { Octokit } from "@octokit/rest";
import Card from './card.js';

class GithubRepos {
    constructor(id, projectName, projectUrl, creatorName, creatorUrl, date, tagsUrl) {
        this.id = id;
        this.projectName = projectName;
        this.projectUrl = projectUrl;
        this.creatorName = creatorName; 
        this.creatorUrl = creatorUrl;
        this.date = date; 
        this.tagsUrl = tagsUrl;
    }
}

async function getGithubRepos() {
    const octokit = new Octokit();

    let repoList = new GithubRepos();

    await octokit.request('GET /users/{user}/repos',  {
        user: 'lou429',
        type: 'public'
    })
    .then((response) => response.json())
    .then(({ data }) => {
        data.forEach(repo => {
            if(!repo.private)
                repoList.push(new GithubRepos(repo.id, repo.name, repo.url, repo.owner.login, repo.owner.owner.url, repo.created_at, repo.tags_url));
        });
    })
    .catch(({ exception }) => {
        console.log(exception);
    });

    return repoList; 
}

function returnGithubRepos() {
    // let RepoList = Array(GithubRepos);
    let repoList = getGithubRepos();
    console.log("got result");
    
    // for(var x = 0; x != repoList.length; x++)
    // {
    //     let element = repoList[x];
    //     RepoList.push(element.id, element.projectName, element.creatorName, element.creatorUrl, element.url, element.date);
    // }

    // repoList.forEach((val) => {
    //     RepoList.push(val);
    // });

    console.log(repoList);

    document.getElementById("repoCount").innerHTML = repoList.length;

    return repoList;
}

function Development() {
    let repos = returnGithubRepos();

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
                <Card date="01-01-2020" projectName="Non est veniam laboris" creatorName="Sebastian Bednarz" creatorUrl="https://www.github.com/lou429"/>
                <Card date="01-01-2020" projectName="Non est veniam laboris" creatorName="Sebastian Bednarz"/>
                <Card date="01-01-2020" projectName="Non est veniam laboris" creatorName="Sebastian Bednarz"/>
                <Card date="01-01-2020" projectName="Non est veniam laboris" creatorName="Sebastian Bednarz"/>
                <Card date="01-01-2020" projectName="Non est veniam laboris" creatorName="Sebastian Bednarz"/>
                <Card date="01-01-2020" projectName="Non est veniam laboris" creatorName="Sebastian Bednarz"/>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Development;