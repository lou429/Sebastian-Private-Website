import {useState, useEffect} from 'react';
import {Octokit} from "@octokit/rest";
import $ from 'jquery';
import Card from './card';
import './dev.scss';

function Development(props) {
    const [repoList,
        setRepoList] = useState([]);

    useEffect(function getApiData() {
        async function getData() {
            const octokit = new Octokit();

            await octokit.request('GET /users/{user}/repos', {
                user: 'lou429',
                authorization: 'token 75c36c5712b6c0b6cc8d7c8cb834bb9db4ea94a6'
            })
            .then(({data}) => {
                setRepoList(receivedGithubCallback(data));
                $("#repoCount").text(repoList.length);
            })
            .catch(({exception}) => {
                console.log(exception);
                setRepoList(null);
            });
        }

        getData(); 
    }, [])

    return (
        <div className="container">
            <div className="row">
                {/* Section for adding github account and socials */}
                <h1>Github account</h1>
                {/* Section to add recent projects, could be done through cards */}
            </div>
            <div className="row">
                <h1>Repos:
                    <a
                        id="repoCount"
                        alt="Repo count"
                        href="https://github.com/lou429?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer">0</a>
                </h1>
                <div className="dev-card-list-container">
                    <div className="dev-card-list">
                        {repoList.map(repo => (<Card {...repo}/>))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function receivedGithubCallback(data) {
    let localList = [new GithubRepos()];
    data.forEach(cardInfo => {
        localList.push(cardInfo);
    });
    return localList;
}

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

export default Development;