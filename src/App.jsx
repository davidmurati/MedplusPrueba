import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Header from "./Component/header/Header";
import Servicio from "./Component/Servicio/Servicio";
import Login from "./Component/Login/Login";


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route exact path="/Servicio">
          <Header />
          <Servicio />
        </Route>
        <Route exact path="/Login">
          <Header />
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

