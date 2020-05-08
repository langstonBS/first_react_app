import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
} from "react-router-dom";
import './App.css';
import HomePage from './HomePage';
import ListPage from './ListPage'
import ListItem from './ListItem';
import AboutMePage from './AboutMePage';

export default class App extends Component {
  render() {
      return (
          <div>
              <Router>
                <Switch>
                    <Route path="/HomePage">
                      <HomePage />
                    </Route>

                <Route path="/AboutMePage">
                    <AboutMePage />
                </Route>

                <Route path="/ListPage">
                      <ListPage />
                </Route>

              <Route path="/ListItem">
                <ListItem />
              </Route>

              </Switch> 
              </Router>
          </div>        
      )
  }
}

