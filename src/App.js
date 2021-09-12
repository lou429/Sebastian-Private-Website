import ReactRouter from './components/Pages/ReactRouter.js';
import NavBar from './components/Navbar/Navbar.js'
import Circle from "./components/General/Circle.js";
import Modal from "./components/Modal/Modal";
import './App.scss';
import './style.scss';
// import $ from 'jquery';

function App() {

    return (
        <div className="page-wrapper">
            {/* Randomly drawn circles */}
            < Circle/>
            <Modal heading="test" body="test" options="test"/>

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