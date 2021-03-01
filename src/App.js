import './App.scss';
import NavBar from './components/navbar.js';
import {BrowserRouter as Router, Routes, Route} from '../node_modules/react-router-dom';
// import Snake from "./components/snake.js";
import Dev from "./components/dev.js";
import Home from "./components/home.js";
import SignInPage from './components/SignInPage.js';
import User from "./components/UserPage.js";
import NoPage from "./components/NoRouteFound.js"

import './style.scss';

function App() {
    return (
        <div className="app-content-div">
            <div className="base-page-wrapper">
                <div className="page-nav">
                    {/* TODO */}
                </div>
                <div className="base-content-container">
                    <div className="base-content-row">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;