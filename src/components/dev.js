import React from 'react'; 
import { Octokit } from "@octokit/rest";

const projects = getGithubRepos();

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
            {
                let repoTemplate = {
                    id: repo.id,
                    name: repo.name,
                    url: repo.url
                }
                repoList.push(repoTemplate);
            }
        });
    });
    console.log("Repo list array: ");
    console.log(repoList);
    return repoList; 
}

function Development() {
    return(
        <div className="container">
            <div className="row">
                {/* Section for adding github account and socials */}
                <h1>Github account</h1>
                {/* Section to add recent projects, could be done through cards */}
            </div>
        </div>
    );
}

export default Development;