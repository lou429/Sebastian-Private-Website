import React from 'react';
import './home.scss';

function Home(props) {
    return (
        <div className="child-content-container">
            <h1 className="heading">
                This website is currently under construction!
            </h1>
            <div className="image heading">
                <img src="./icons/widget.png" alt="Error"></img>
            </div>
        </div>
    );
}

export default Home;