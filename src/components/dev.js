import {useState, useEffect} from 'react';
import {Octokit} from "@octokit/rest";
import $ from 'jquery';
import Card from './card';

function Development(props) {
    const [repoList, setRepoList] = useState([]);

    useEffect(() => {
        const octokit = new Octokit();

        octokit.request('GET /users/{user}/repos', {
            user: 'lou429',
            authorization: 'token 75c36c5712b6c0b6cc8d7c8cb834bb9db4ea94a6'
        })
        .then(({data}) => {
            let output = [new GithubRepos()];
            data.forEach((repo) => {
                if(repo.id !== undefined)
                    output.push(new GithubRepos(repo.id, repo.name, repo.html_url, repo.owner.login, repo.owner.url, repo.created_at.substring(0, 10), repo.tags_url));
            })
            setRepoList(receivedGithubCallback(output));
            debugger;
            $("#repoCount").innerHTML = output.length;
        })
        .catch(({exception}) => {
            console.log(exception);
            setRepoList(null);
        });
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
                    <i id="repoCount"></i>
                </h1>
                <br/>
                <div className="dev-card-list-container">
                    <div className="dev-card-list">
                        {
                            repoList.forEach((repo) => {
                                <Card {...repo}/>
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

function receivedGithubCallback(data) {
    let counter = 0;
    let localList = [new GithubRepos()];
    data.forEach(cardInfo => {
        localList.push(cardInfo);
    });

    $('#repoCount').text(counter);
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