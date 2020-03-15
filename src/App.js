import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Join } from './pages/join';
import { Bloggers } from './pages/blogger';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={Join} />
          <Route path="/bloggers" component={Bloggers} />
          <Route path="/join" component={Join} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
