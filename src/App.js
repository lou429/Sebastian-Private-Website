import './App.scss';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Routes, Route, Link } from '../node_modules/react-router-dom';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import {useAuthState} from 'react-firebase-hooks/auth';
// import {useCollectionData} from 'react-firebase-hooks/firestore';

import Snake from "./components/snake.js";
import Dev from "./components/dev.js";
import Home from "./components/home.js";
import SignInPage from './components/SignInPage.js';
import User from "./components/UserPage.js";



// const auth = firebase.auth();
// const firestore = firebase.firestore();


function App() {
  // const [user] = useAuthState(auth);
  let user = 
    ['Name', 
    '123151'];

  return (
    <Router> 
      <div className="App">
        <div className="container-fluid">
        <Navbar user={user}/>
      </div>
      <div className="container">
        <div className="row">
      <h1 className="heading"> 
        This website is currently under construction!
      </h1>
      <div className="image heading">
        <img src="./icons/widget.png" alt="Error"></img>
      </div>
      </div>
      </div>
    </div>
    
    <Router>
      <Routes> 
        <Route path="/" element={<Home/>} exact/>
        <Route path="/dev" element={<Dev/>}/>
        <Route path="/SignIn" element={<SignInPage/>}/>
        <Route path="/User" element={<User/>}/>
      </Routes>
    </Router>

    </Router>
  );
}

export default App;
