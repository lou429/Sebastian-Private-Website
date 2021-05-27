import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Dev from "./dev.js";
import Home from "./home.js";
import User from "./UserPage.js";
import NoPage from "./NoRouteFound.js";
import Changelog from "./Changelog.js";

function ReactRouter() {
    return(
        <Router>
            <Routes>
                <Route path='*' exact element={< NoPage />}/>
                <Route path="/" exact element={< Home />}/>
                <Route path="/home" element={< Home />}/>
                {/* <Route path="/dev" element={< Dev />}/> */}
                <Route path="/changelog" element={< Changelog />}/> 
                <Route path="/User" element={< User />}/>
            </Routes>
        </Router>
    );
}

export default ReactRouter;