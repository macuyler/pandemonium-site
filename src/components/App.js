import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import injectSheet from 'react-jss';
import routes from './pages';

const App = ({ classes }) => {
  return (
    <div className={classes.app}>
      <Router>
        <Switch>
          {Object.keys(routes).map((route) => (
            <Route key={route} path={route} component={routes[route]} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

const styles = {
  app: {
    width: '100%',
    minHeight: '100vh',
  }
};

export default injectSheet(styles)(App);
