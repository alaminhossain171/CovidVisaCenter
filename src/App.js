import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Account/Home';


function App() {
  return (
    <Router>
       <div>
<Switch>
<Route path='/' exact component={Home}  />



</Switch>


</div>
    </Router>
   
  );
}

export default App;
