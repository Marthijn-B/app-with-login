import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Redirect } from 'react-router';

import LoginPage from './pages/LoginPage';
import PrivatePage from './pages/PrivatePage';
import NotFoundPage from './pages/NotFoundPage';

import Button from '@material-ui/core/Button';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path={"/"} exact>
              <h3>Main "/" page</h3>
                <Button variant="outlined" color="primary" href="/login">
                  Login Page
                </Button>
                <Button variant="outlined" color="primary" href="/private">
                  Private Page
                </Button>
            </Route>
            <Route path={"/login"} component={LoginPage} exact />
            <Route path={"/private"} component={PrivatePage} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </header>
      </div>
  </Router>
  );
}

export default App;
