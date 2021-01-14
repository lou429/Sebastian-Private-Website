import React from 'react';
import './card.scss';
// function Card({id, name, url, date}) {
function Card(props) {
    return (
        <div className="dev-card">
            <div className="dev-card-header">
                <p>{props.date}</p>
                <h2>{props.name}</h2>
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
                    Pariatur dolore
                </div>
            </div>
            <div className="dev-card-tags">
                    <a>temp</a>
                    <a>temp</a>
                    <a>temp</a>
                    {/* TODO: Return coding tag from github */}
                </div>
        </div>
    );
}

export default Card;