import React, {useState, useEffect} from 'react';
import './card.scss';
import {Octokit} from "@octokit/rest";
import $ from 'jquery';

function Card(props) {
    const [tagList, setTagList] = useState([]);

    $(document).ready(function () {
        $('.dev-card-avatar-image').each(function () {
            if ($(this).attr('src') === 'undefined.png') 
                $(this).attr('class', 'dev-card-avatar-image-no-image');
            }
        );
    })

    useEffect(function loadTagInfo() {
        async function getData() {
            const octokit = new Octokit();
            if(props.projectName === null)
                return setTagList(["none"]);
            await octokit.request('GET ' + props.languages_url, {
                headers: {
                    authorization: 'token 75c36c5712b6c0b6cc8d7c8cb834bb9db4ea94a6'
                }
            }).then(({data}) => {
                setTagList(receivedTagCallback(data));
                console.log("Tag list: ");
                console.log(tagList);
                debugger;
            }).catch(({exception}) => {
                console.log(exception);
                setTagList(["none"]);
            });
        }
        getData();
    }, [])

    return (
        <div id={props.id} className={props.id !== "" ? 'dev-card' : 'dev-card-non'}>
            <div className="dev-card-header">
                <p>{props.date || "01-01-2000"}</p>
                <a href={props.projectUrl} alt="Project url" target="_blank" rel="noopener noreferrer">
                    <h2 className="card-profile">
                        {props.projectName || " "}
                    </h2>
                </a>
            </div>

            <div className="dev-card-body">
                <a
                    className="dev-card-avatar-link"
                    href={props.creatorUrl}
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
                { tagList === ["none"] ? 
                tagList.map((tag, index) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a key={index.toString()}>{tag.toString()}</a> 
                )) : ''}
            </div>
        </div>
    );
}

function receivedTagCallback(data) {
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