import ReactRouter from './components/ReactRouter.js';
import NavBar from './components/navbar.js'
import Circle from "./components/Circle.js";
import './App.scss';
import './style.scss';

function App() {
    return (
        <div className="page-wrapper">
            {/* Randomly drawn circles */}
            {/* < Circle/>  */} 

            <div className="glass-page-wrapper">
                {/* All navbar content */}
                <NavBar/>

                <div className="content-wrapper">
                    {/* React router nav pages and all content that they will render */}
                    <ReactRouter/>
                </div>
            </div>
        </div>
    );
}

export default App;