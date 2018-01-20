import React from 'react';
import { Router, Route, Redirect } from 'react-router';

import HomeComponent from './Components/Home/HomeComponent';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={HomeComponent} />
  </Router>
);

export default Routes;
