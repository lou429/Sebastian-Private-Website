import React, {useState, useEffect} from 'react';
import './card.scss';
import {Octokit} from "@octokit/rest";
import $ from 'jquery';

function Card(props) {
    const [tagList,
        setTagList] = useState([]);
    $(document).ready(function () {
        $('.dev-card-avatar-image')
            .each(function () {
                if ($(this).attr('src') === 'undefined.png') 
                    $(this).attr('class', 'dev-card-avatar-image-no-image');
                }
            );
    })

    useEffect(function loadTagInfo() {
        async function getData() {
            const octokit = new Octokit();

            await octokit.request('GET /repos/{user}/{repoName}/languages', {
                user: 'lou429',
                repoName: props.projectName === undefined
                    ? "Could not get name"
                    : props
                        .projectName
                        .replace(" ", ""),
                authorization: 'token 75c36c5712b6c0b6cc8d7c8cb834bb9db4ea94a6'
            }).then(({data}) => {
                setTagList(receivedTagCallback(data));
                console.log(data);
            }).catch(({exception}) => {
                console.log(exception);
                setTagList(null);
            });
        }
        getData();
        console.log(tagList);
    }, [])

    return (
        <div className="dev-card">
            <div className="dev-card-header">
                <p>{props.date || "01-01-2000"}</p>
                <h2
                    className={props.projectName == ''
                    ? 'card-profile-failed'
                    : 'card-profile-active'}>{props.projectName || "Could not get name"}</h2>
            </div>

            <div className="dev-card-body">
                <a
                    className="dev-card-avatar-link"
                    href={props.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        className="dev-card-avatar-image"
                        src={props.creatorUrl + ".png"}
                        alt="Author avatar"/>
                </a>
                <svg className="dev-card-half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>
                <div className="dev-card-author-name">
                    <div className="dev-card-author-name-prefix">Author</div>
                    <a
                        id="authorName"
                        href={props.creatorUrl}
                        target="_blank"
                        rel="noopener noreferrer">{props.creatorName || "Could not get name"}</a>
                </div>
            </div>
            <div className="dev-card-tags">
                {/* {tagList.map(tag => (
                    <a>{tag}</a>
                ))} */}
                {/* Object.keys(tagList).map(tag => (     <a>{tag}</a> ))*/}
            </div>
        </div>
    );
}

function receivedTagCallback(data) {
    debugger;
    console.log(data);
    if (typeof(data) === typeof(Array)) {
        let localList = [];
        data.forEach((tagInfo) => {
            if (tagInfo !== 'undefined' && tagInfo !== undefined) 
                localList.push(tagInfo);
            }
        );
        return localList;
    } else 
        return Object.keys(data);
    }

export default Card;