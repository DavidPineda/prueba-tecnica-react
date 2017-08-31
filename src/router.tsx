import * as React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import Service from './Service';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/service" component={Service} />
    </Router>
  );
}
