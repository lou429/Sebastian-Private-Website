import React from 'react';
import './card.scss';
import { Octokit } from "@octokit/rest";
import $ from 'jquery';
// function Card({id, name, url, date}) {


function Card(props) {
    async function getGithubTags(tagsUrl) {
        let tagList = [{tagName: ""}];
        tagList.pop();

        const octokit = new Octokit();
        await octokit.request('GET /users/{user}/repos', {
            user: ''
        })
        .then(({ data }) => {
            data.forEach((tags) => {
                tagList.push(tags);
            })
        })
        .catch(({ exception }) => {
            console.log(exception);
        });

        return tagList;
    }
    
    $(document).ready(function() {
        let counter = 0;
        $('.dev-card-avatar-image').each(function() {
            if($(this).attr('src') === 'undefined.png')
                $(this).attr('class', 'dev-card-avatar-image-no-image');
            counter++;
        });
        // TODO: Remove this once a better way to load repo data 
        $('#repoCount').text(counter);
    })

    return (
        <div className="dev-card">
            <div className="dev-card-header">
                <p>{props.date || "01-01-2000"}</p>
                <h2>{props.projectName || "Could not get name"}</h2>
            </div>

            <div className="dev-card-body">
                <a className="dev-card-avatar-link" href={props.url} target="_blank" rel="noopener noreferrer">
                    <img className="dev-card-avatar-image" src={props.creatorUrl + ".png"} alt="Author avatar"/>
                </a>
                <svg className="dev-card-half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>
                <div className="dev-card-author-name">
                    <div className="dev-card-author-name-prefix">Author</div>
                    <a id="authorName" href={props.creatorUrl} target="_blank" rel="noopener noreferrer">{props.creatorName || "Could not get name"}</a>
                </div>
            </div>
            <div className="dev-card-tags">
                    {/* TODO: Return coding tag from github */}
                    {
                        // getGithubTags(props.tagsUrl).map((tag) => {
                        //     <a href={props.projectUrl  || "#"} target="_blank" rel="noopener noreferrer">{tag} </a>
                        // })
                    }
                </div>
        </div>
    );
}

export default Card;