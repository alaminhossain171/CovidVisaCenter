import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Account/Home';
import Reg from './Components/Account/Reg';



function App() {
  return (
    <Router>
       <div>
  
<Switch>
<Route path='/' exact component={Home}  />
<Route path='/reg' exact component={Reg}  />


</Switch>


</div>
    </Router>
   
  );
}

export default App;
