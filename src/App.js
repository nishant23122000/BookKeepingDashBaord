import React from 'react';
import Header from "./components/Header"
import "./App.css"
import Mainbody from './components/Mainbody';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Help from './components/overlays/Help';
import Settings from './components/overlays/Settings';
import AddNewPurchase from './components/overlays/AddNewPurchase';
import CreateNoteBook from './components/overlays/CreateNoteBook';
import Login from './components/Login';
function App() {
  return (

    <Router>
      <Switch>
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/" >
          <Header />
          <Mainbody />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
