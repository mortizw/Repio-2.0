import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import Alerts from "./components/layout/Alerts"
import PrivateRoute from "./components/routing/PrivateRoute"

import ItemState from "./context/item/ItemState"
import AuthState from "./context/auth/AuthState"
import AlertState from "./context/alert/AlertState"
import IntervalState from "./context/interval/IntervalState"

import { Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import "./App2.css"

const App = () => {
  return (
    <Paper>
      <AuthState>
        <ItemState>
          <AlertState>
            <IntervalState>
              <Router>
                <Fragment>
                  <Navbar />
                  <Alerts />
                  <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                  </Switch>
                </Fragment>
              </Router>
            </IntervalState>
          </AlertState>
        </ItemState>
      </AuthState>
    </Paper>
  )
}

export default App
