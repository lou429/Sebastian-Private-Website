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
                repoList.push({id: repo.id, projectName: repo.name, creatorName: repo.owner.login, creatorUrl: repo.owner.owner.url, url: repo.url, date:repo.created_at});
        });
    })
    .catch(({ data }) => {
        console.log(data);
    });
    
    let counter = 0; 
    repoList = repoList.map((repo) => {
        document.createElement("Card", )
        console.log(counter++ + " : " + repo.projectName + repo.date);
    });

    console.log(repoList);

    return repoList; 
}

async function returnGithubRepos() {
    let RepoList = [{id: 1, projectName: "", creatorName: "", creatorUrl: "", url: "", date:""}];
    let repoList = await getGithubRepos();
    console.log("got result");
    
    for(var x = 0; x != repoList.length; x++)
    {
        let element = repoList[x];
        RepoList.push(element.id, element.projectName, element.creatorName, element.creatorUrl, element.url, element.date);
    }

    document.getElementById("repoCount").innerHTML = RepoList.length;

    return RepoList;
}

function Development() {
    // let repo = repoList[0];
    // let singleRepo = repoList[0];
    // console.log("Single repo: " + singleRepo);
    let repos = returnGithubRepos();
    // repos.forEach(repo => {
    //     console.log(repo);
    // });

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