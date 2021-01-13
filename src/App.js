import './App.scss';
import Navbar from './components/navbar.js';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "../node_modules/react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import Snake from "./components/snake.js";
import Dev from "./components/dev.js";
import Home from "./components/home.js";



const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  const [user] = useAuthState(auth);

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
    //Switch for the paths
    <Switch>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/dev">
        <Dev/>
      </Route>
      <Route path="/snake">
        <Snake/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
