import React from 'react';
import {Octokit} from "@octokit/rest";
import Card from './card.js';
import $ from 'jquery';

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

$(document).ready(function() {
    console.log("Document ready trigger");
    const octokit = new Octokit();

    octokit.request('GET /users/{user}/repos', {
        user: 'lou429', 
        authorization: 'token 75c36c5712b6c0b6cc8d7c8cb834bb9db4ea94a6'
    })
    .then(({ data }) => {
          let output = [new GithubRepos()];
          data.forEach((repo) => {
               output.push(new GithubRepos(repo.id, repo.name, repo.html_url, repo.owner.login, repo.owner.url, repo.created_at.substring(0,10), repo.tags_url));
          })
          $('#repoCount').text(data.length);
          repoList = receivedGithubCallback(output);
    });
    // .catch(({ exception }) => {
    //     console.log(exception);
    // })
    // https://api.github.com/users/lou429/repos
})

function receivedGithubCallback(data)
{
    let counter = 0;
    let localList = [new GithubRepos()];
    data.forEach(cardInfo => {
        localList.push(cardInfo);
        console.log(cardInfo);
        counter++; 
    });

    $('#repoCount').text(counter);
    return localList;
}

let repoList = [new GithubRepos()];

function Development() {
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
                        <Card date="01-01-2020" projectName="Non est veniam laboris" creatorName="Sebastian Bednarz" creatorUrl="https://github.com/raegar"/>
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