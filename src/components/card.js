/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';
import './card.scss';
import {Octokit} from "@octokit/rest";
import $ from 'jquery';
import CardTags from './CardTags.js';
import dotenv from 'dotenv';

class GithubTag {
    constructor(array) {
        this.language = array[0];
        this.count = array[1]; 
    }
}

function Card(props) {
    const [tagList, setTagList] = useState([]);

    //Function to check for invalid images - replace
    // $(document).ready(function () {
    //     $('.dev-card-avatar-image').each(function () {
    //         if ($(this).attr('src') === 'undefined.png') 
    //             $(this).attr('class', 'dev-card-avatar-image-no-image');
    //         }
    //     );
    // })

    //Use effect hook to load tag info from Github
    useEffect(function loadTagInfo() {
        async function getData() {
            const octokit = new Octokit();
            if(props.projectName === null)
                return setTagList(["none"]);
            await octokit.request('GET ' + props.languages_url, {
                headers: {
                    authorization: process.env.GITHUB_PK
                }
            }).then(({data}) => {
                setTagList(receivedCallback(data));
            }).catch(({exception}) => {
                console.log(exception);
                setTagList(receivedCallback(["none"]));
            });
        }
        getData();
    }, [])

    function receivedCallback(data) {
        let result = []
        //This function uses reflection to return language type as a variable
        Object.entries(data).map((tag, index) => {
            if(index < 3) //Limit to 3 results
                result.push(new GithubTag(tag))
        });

        return result; 
    }

    return (
        <div id={props.id} className='dev-card'>
            {/* Github repo name and date */}
            <div className="dev-card-header">
                <p>{props.date || "01-01-2000"}</p>
                <a href={props.projectUrl} alt="Project url" target="_blank" rel="noopener noreferrer">
                    <h2 className="card-profile">
                        {props.projectName || ""}
                    </h2>
                </a>
            </div>

            {/* Full description of the github repo */}
            <div className="dev-card-description">
                <div className="dev-card-description-body">
                    <p>{props.description || ""}</p>
                </div>
            </div>

            
            <div className="dev-card-body">
                <a className="dev-card-avatar-link" href={props.creatorUrl} target="_blank" rel="noopener noreferrer">
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
                 {tagList.map((tag, index) => (<CardTags key={props.id + ' ' + index.toString()} {...tag}/>))}
            </div>
        </div>
    );
}

export default Card;