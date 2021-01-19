import './App.scss';
import NavBar from './components/navbar.js';
import {BrowserRouter as Router, Routes, Route, Link} from '../node_modules/react-router-dom';
import Snake from "./components/snake.js";
import Dev from "./components/dev.js";
import Home from "./components/home.js";
import SignInPage from './components/SignInPage.js';
import User from "./components/UserPage.js";
import {Octokit} from "@octokit/rest";
import $ from 'jquery';
import './style.scss';
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

function App() {

$(document).ready(function () {
        const octokit = new Octokit();

        octokit
            .request('GET /users/{user}/repos', {
            user: 'lou429',
            authorization: 'token 75c36c5712b6c0b6cc8d7c8cb834bb9db4ea94a6'
        })
            .then(({data}) => {
                let output = [new GithubRepos()];
                data.forEach((repo) => {
                    output.push(new GithubRepos(repo.id, repo.name, repo.html_url, repo.owner.login, repo.owner.url, repo.created_at.substring(0, 10), repo.tags_url));
                })
                $('#repoCount').text(data.length);
                repoList = receivedGithubCallback(output);
                console.log("FINAL");
                console.log(repoList);;
            })
            .catch(({exception}) => {
                console.log(exception);
                // alert("Error occurred when loading repositories");
            });
    });

function receivedGithubCallback(data) {
    let counter = 0;
    let localList = [new GithubRepos()];
    data.forEach(cardInfo => {
        localList.push(cardInfo);
        // console.log(cardInfo);
        counter++;
    });

    $('#repoCount').text(counter);
    return localList;
}

let repoList;

return (
    <div className="App">
        <NavBar/>
        <br/>
        <br/>
        <div id="content-wrapper" className="base-content-container">
            <div className="base-content-row">
                <Router>
                    <Routes>
                        <Route path="/" element={< Home />} exact/>
                        <Route path="/home" element={< Home />}/>
                        <Route
                            path="/dev"
                            element={< Dev repoList = {
                            repoList
                        } />}/>
                        <Route path="/SignIn" element={< SignInPage />}/>
                        <Route path="/User" element={< User />}/>
                    </Routes>
                </Router>
            </div>
        </div>
    </div>
);
}

export default App;