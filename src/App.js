import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
} from "react-router-dom";
import './App.css';
import './index.css'
import HomePage from './HomePage';
import ListPage from './ListPage'
import ListItem from './ListItem';
import AboutMePage from './AboutMePage';
import SiteNaviagation from './SiteNaviagation';
import AddPage from './AddPage'

export default class App extends Component {
  render() {
      return (
          <div>
          <Router>
            <SiteNaviagation />
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
              <Route path="/AddPage">
                <AddPage />
              </Route>

              </Switch> 
              </Router>
          </div>        
      )
  }
}

