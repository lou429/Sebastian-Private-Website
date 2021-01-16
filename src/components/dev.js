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

function getRest() {
// $(document).ready(function() {
    console.log("Document ready trigger");
    const octokit = new Octokit();

    octokit.request('GET /users/{user}/repos', {
        user: 'lou429', 
        authorization: 'token 75c36c5712b6c0b6cc8d7c8cb834bb9db4ea94a6'
    })
    .then(({ data }) => {
          let output = new GithubRepos();
          data.forEach((repo) => {
               output.push(new GithubRepos(repo.id, repo.name, "", repo.owner.login, repo.owner.owner.url, repo.created_at, repo.tags_url));
          })
          $('#repoCount').text(data.length);
          receivedGithubCallback(output);
    })
    // .catch(({ exception }) => {
    //     console.log(exception);
    // })
    // https://api.github.com/users/lou429/repos
// })
}

function receivedGithubCallback(data)
{
    let counter = 0;
    data.forEach(cardInfo => {
        $('.dev-card-list').append($("<Card date={cardInfo.date} projectName={cardInfo.projectName}/>"));
        console.log(cardInfo);
        counter++; 
    });

    $('.repoCount').text(counter);
}

function Development() {
    // async function getGithubRepos() {
    //     const octokit = new Octokit();
    //     console.log("Running result func");
    //     let receivedResult = [new GithubRepos()];
    //     console.log("Running first variable func: ");
    //     let result = () => {
    //         debugger;
    //         do {
    //             setTimeout(50);
    //             console.log("Null counter: " + counter++);
    //         receivedResult = () => {
    //             octokit.request('GET /users/{user}/repos', {
    //                 user: 'lou429',
    //                 type: 'public',
    //                 authorization: 'token 75c36c5712b6c0b6cc8d7c8cb834bb9db4ea94a6'
    //             })
    //             // .then((response) => response.json())
    //             .then(({data}) => {
    //                 data = data.json();
    //                 var list = [new GithubRepos()];
    //                 data.forEach(repo => {
    //                         let i = new GithubRepos(repo.id, repo.name, repo.url, repo.owner.login, repo.owner.owner.url, repo.created_at, repo.tags_url); 
    //                         list.push(i);
    //                         console.log("PUSHED: " + i);
    //                         console.log("next call");                          
    //                 });
    //                 console.log("List: " + list);
    //                 return list;
    //             })
    //             .catch(({exception}) => {
    //                 console.log(exception);
    //             });
    //             return [new GithubRepos()];
    //         };
    //         } while(receivedResult === null);
    //         console.log("Func result: " + receivedResult);
    //         return receivedResult;
    //     };
    //     console.log("Final func call result is: "+ result)
    //     return result;
    // }

    // async function returnGithubRepos() {
    //     let repoList = await getGithubRepos();
    //     // while(repoList != null)
    //     //     setTimeout(50); 
    //     console.log("Final received result: " + repoList);
        

    //     // repoList.forEach((val) => {     RepoList.push(val); });
    //     // document.getElementById("repoCount").innerHTML = repoList.length;

    //     return repoList;
    // }

    // let repos = returnGithubRepos();

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