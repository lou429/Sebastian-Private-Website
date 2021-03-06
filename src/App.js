import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar.js'
import Dev from "./components/dev.js";
import Home from "./components/home.js";
import SignInPage from './components/SignInPage.js';
import User from "./components/UserPage.js";
import NoPage from "./components/NoRouteFound.js"
import Circle from "./components/Circle.js";
import './style.scss';

function App() {
    return (
        <div className="page-wrapper">
            {/* Randomly drawn circles */}
            < Circle/>

            <div className="glass-page-wrapper">
                <NavBar/>

                <div className="content-wrapper">
                    {/* React router nav pages */}
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
    );
}

export default App;