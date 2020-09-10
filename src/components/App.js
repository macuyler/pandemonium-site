import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import routes from './pages';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          {Object.keys(routes).map((route) => (
            <Route path={route} component={routes[route]} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
