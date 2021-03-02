import './App.scss';
import NavBar from './components/navbar.js';
import {BrowserRouter as Router, Routes, Route} from '../node_modules/react-router-dom';
// import Snake from "./components/snake.js";
import Dev from "./components/dev.js";
import Home from "./components/home.js";
import SignInPage from './components/SignInPage.js';
import User from "./components/UserPage.js";
import NoPage from "./components/NoRouteFound.js"
import Circle from "./components/Circle.js";

import './style.scss';


function App() {
    return (
        <div className="app-content-div">
            
            <Circle/>

            <div className="glass-page-wrapper">
                <div className="base-page-nav">
                    <Router>
                            <Routes>
                                <Route path='*' exact element={< NoPage />}/>
                                <Route path="/" exact element={< Home />}/>
                                <Route path="/home" element={< Home />}/>
                                <Route path="/dev" element={< Dev />}/>
                                <Route path="/SignIn" element={< SignInPage />}/>
                                <Route path="/User" element={< User />}/>
                            </Routes>
                        </Router>
                    {/* TODO */}
                    <br/>
                </div>
                <div className="base-content-container">
                    <div className="base-content-row">
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;