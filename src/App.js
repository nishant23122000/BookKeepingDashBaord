import React, { Component } from 'react'
import Header from "./Layout/Header/Header";
import "./App.css"
import Dashboard from './Pages/DashBoard/Dashbaord';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { Provider } from "react-redux";
import store from "./store/store";
import Login from './Pages/Login/Login';
import { get_user_status } from "./store/actions/authAction";


class App extends Component {


  componentDidMount() {
    if (!store.getState().user.isAuth) {
      store.dispatch(get_user_status())
    }

  }
  render() {

    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" >
              <Login />
            </Route>

            <Route path="/" >
              <Header />

              <Dashboard />
            </Route>

          </Switch>
        </Router>
      </Provider>
    )
  }
}



export default App;
