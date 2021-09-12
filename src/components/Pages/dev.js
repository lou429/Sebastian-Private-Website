import {useState, useEffect} from 'react';
import {Octokit} from "@octokit/rest";
import Card from '../General/Card';
import ContentWrapper from '../Content/ContentWrapper.js';
import './dev.scss';

class GithubRepos {
    constructor(id, projectName = "", projectUrl, creatorName, creatorUrl, date = "", languages_url = "", description) {
        this.id = id;
        this.projectName = projectName.includes("-") ? projectName.split('-').join(' ') :  projectName.replace(/([a-z])([A-Z])/g, '$1 $2');
        this.projectUrl = projectUrl;
        this.creatorName = creatorName;
        this.creatorUrl = creatorUrl;
        this.date = date.substring(0,date.indexOf('T')).split('-').reverse().join('-'); 
        this.languages_url = languages_url.substring(languages_url.indexOf("/repos/"), languages_url.length)
        this.description = description;
    }
}

function Development() {
    const [repoList, setRepoList] = useState([]);
    const [repoCount, setRepoCount] = useState(0);

    useEffect(function getApiData() {
        async function getData() {
            const octokit = new Octokit();

            await octokit.request('GET /users/lou429/repos', {
                headers: {
                    authorization: process.env.GITHUB_PK
                }
            })
            .then(({data}) => {
                setRepoList(receivedCallback(data));
                setRepoCount(data.length);
            })
            .catch(({exception}) => {
                console.log(exception);
                setRepoList([new GithubRepos()]);
            });
        }
        
        getData(); 
    }, [repoCount])

    function receivedCallback(data) {
        let localList = [];
        data.forEach(cardInfo => {
            if(cardInfo !== null && !cardInfo.private)
                localList.push(new GithubRepos(cardInfo.id, cardInfo.name, cardInfo.html_url, cardInfo.owner.login, cardInfo.owner.html_url, cardInfo.created_at, cardInfo.languages_url, cardInfo.description));
        });
        return localList;
    }

    return (
        <ContentWrapper heading="Dev page">
            {/* <div className="row">
                <h1>Github repositories</h1>
            </div> */}
            <div className="row">
                {/* <h1>Repos: <a id="repoCount" alt="Repo count" href="https://github.com/lou429?tab=repositories" target="_blank" rel="noopener noreferrer">{repoCount}</a></h1> */}
                <div className="dev-card-list-container">
                    <div className="dev-card-list">
                        {repoList && repoList !== [new GithubRepos()] ? repoList.map(repo => (repo !== undefined ? <Card key={repo.id} {...repo} /> : '')) : ''}
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
}

export default Development;