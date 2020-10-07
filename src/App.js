import React,{createContext, useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import AddSector from './Components/Addsector/AddSector';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser]= useState({});

  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]} >
      <p>Name :{loggedInUser.name}</p> 

      <Router>
      <Switch>
        <Route path="/home">
        <Home></Home> 
        </Route>

        <PrivateRoute path="/registration/:_id">
        <Registration></Registration>
        </PrivateRoute>

        <Route path="/login">
        <Login></Login>
        </Route>


        <Route path="/addSector">
        <AddSector></AddSector> 
        </Route>

        {/* <Route path="/registration">
          <Registration></Registration>
        </Route> */}
  
       
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="*">
          <Notfound></Notfound>
        </Route>

      </Switch>
    </Router>
    </UserContext.Provider>
  
  );
}

export default App;
