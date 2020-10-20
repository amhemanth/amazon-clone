import React from 'react';
import './App.css';

import { BrowserRouter as Router , Route , Switch} from "react-router-dom";
// Entry point to Home
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
