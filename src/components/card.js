import React from 'react';
import './card.scss';
// function Card({id, name, url, date}) {
function Card(props) {
    return (
        <div className="dev-card">
            <div className="dev-card-header">
                <p>{props.date || "01-01-2000"}</p>
                <h2>{props.projectName || "Could not get name"}</h2>
            </div>

            <div className="dev-card-body">
                <a className="dev-card-avatar-link" href={props.url}>
                    <img src="https://github.com/lou429.png"/>
                </a>
                <svg className="dev-card-half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>
                <div className="dev-card-author-name">
                    <div className="dev-card-author-name-prefix">Author</div>
                    <a id="authorName" href={props.creatorUrl || "#"}>{props.creatorName || "Could not get name"}</a>
                </div>
            </div>
            <div className="dev-card-tags">
                    <a href={props.creatorUrl || "#"}>temp</a>
                    {/* TODO: Return coding tag from github */}
                </div>
        </div>
    );
}

export default Card;