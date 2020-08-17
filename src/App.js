import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Redirect } from 'react-router';

import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path={"/"} exact>
              <h3>Main "/" page</h3>
            </Route>
            <Route path={"/login"} component={LoginPage} exact>
            </Route>
            <Route path={"/private"} exact>
              <h3>This is the private page</h3>
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </header>
      </div>
  </Router>
  );
}

export default App;
