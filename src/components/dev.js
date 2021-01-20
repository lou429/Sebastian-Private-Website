import {useState, useEffect} from 'react';
import {Octokit} from "@octokit/rest";
import $ from 'jquery';
import Card from './card';
import './dev.scss';

function Development(props) {
    const [repoList, setRepoList] = useState([]);

    useEffect(function getApiData() {
        async function getData() {
            const octokit = new Octokit();

            await octokit.request('GET /users/lou429/repos', {
                headers: {
                    authorization: 'token 75c36c5712b6c0b6cc8d7c8cb834bb9db4ea94a6'
                }
            })
            .then(({data}) => {
                setRepoList(receivedGithubCallback(data));
                $("#repoCount").text(repoList.length);
            })
            .catch(({exception}) => {
                console.log(exception);
                setRepoList([new GithubRepos()]);
            });
        }
        getData(); 
    }, [])

    $(window).on('load', function() {
        $('dev-card').on("remove", onCardChange());
        $('.dev-card h2').each(function () {
            if($(this).text() === " " || $(this).text() === "")
                $(this).parent().parent().parent().remove();
        })
    })

    function onCardChange() {
        let counter = 0;
        $('.dev-card').each(function() {
            counter++;
        })
        $('#repoCount').text(counter);
    }

    return (
        <div className="container">
            <div className="row">
                <h1>Github account</h1>
            </div>
            <div className="row">
                <h1>Repos: <a id="repoCount" alt="Repo count" href="https://github.com/lou429?tab=repositories" target="_blank" rel="noopener noreferrer">0</a></h1>
                <div className="dev-card-list-container">
                    <div className="dev-card-list">
                        {repoList !== [new GithubRepos()] ? repoList.map((repo, index) => (repo !== undefined ? <Card key={index} id={repo.id} projectName={repo.projectName} projectUrl={repo.projectUrl} creatorUrl={repo.creatorUrl} creatorName={repo.creatorName} date={repo.date} languages_url={repo.languages_url} description={repo.description} /> : '')) : ''}
                        {/* {repoList !== [new GithubRepos()] ? repoList.map(repo => (repo !== undefined ? <Card key={repo.id} {...repo} /> : '')) : ''} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

function receivedGithubCallback(data) {
    let localList = [];
    data.forEach(cardInfo => {
        if(cardInfo !== null && !cardInfo.private)
            localList.push(new GithubRepos(cardInfo.id, cardInfo.name, cardInfo.html_url, cardInfo.owner.login, cardInfo.owner.html_url, cardInfo.created_at, cardInfo.languages_url, cardInfo.description));
    });
    return localList;
}

const loremIpsum = "Est quis eu veniam eiusmod anim commodo ex nulla nulla. Ea eiusmod amet laboris enim consectetur ad eu. Nostrud fugiat aliqua nostrud deserunt consectetur consequat in aliqua mollit consequat voluptate. Veniam aliqua aute nostrud esse est qui laborum amet. Nostrud ea sunt excepteur amet. Est est do in cupidatat nulla esse id. Laborum ex ad consectetur reprehenderit amet velit commodo elit voluptate mollit pariatur. Id eiusmod enim excepteur in eiusmod magna labore minim. Et nisi voluptate magna dolore reprehenderit eu amet proident incididunt. Nostrud officia proident mollit reprehenderit quis in sunt officia et."

class GithubRepos {
    constructor(id, projectName = "", projectUrl, creatorName, creatorUrl, date = "", languages_url = "", description) {
        this.id = id;
        this.projectName = projectName.replace(/([a-z])([A-Z])/g, '$1 $2');
        this.projectUrl = projectUrl;
        this.creatorName = creatorName;
        this.creatorUrl = creatorUrl;
        this.date = date.substring(0,date.indexOf('T')).split('-').reverse().join('-'); 
        this.languages_url = languages_url.substring(languages_url.indexOf("/repos/"), languages_url.length)
        this.description = description === null ? loremIpsum : description;
    }
}

export default Development;