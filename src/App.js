import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar.js';
import NavbarHeading from './components/navbarHeading.js';
import Dev from "./components/dev.js";
import Home from "./components/home.js";
import SignInPage from './components/SignInPage.js';
import User from "./components/UserPage.js";
import NoPage from "./components/NoRouteFound.js"
import Circle from "./components/Circle.js";
import './style.scss';

function App() {
    return (
    <>
        <Circle/>
        <div className="page-content">
            <div className="glass-page-wrapper">
                <div className="navbar-wrapper">
                    <div className="navbar-heading">
                        <NavbarHeading/>
                    </div>
                    <br/>
                    <div className="navbar-content">
                        <Navbar/>
                    </div>
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
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default App;