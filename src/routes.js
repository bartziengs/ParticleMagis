import React from 'react';
import { Router, Route, Redirect } from 'react-router';

import HomeComponent from './Components/Home/HomeComponent';
import PPComponent from './Components/Footer/PPComponent';
import TermsComponent from './Components/Footer/TermsComponent';



const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={HomeComponent} />
    <Route path="/privacy" component={PPComponent} />
    <Route path="/terms" component={TermsComponent} />
  </Router>
);

// const Routes = (props) => (
//   <Router {...props}>
//     <Redirect from="/" to="/home" />
//     <Route path="/" component={App} >
//       <Route name="Home" path="/home" component={HomeComponent} />
//       <Route name="Privacy Policy" path="/about" component={About} />
//       <Route name="Terms & Conditions" path="/search/:keyWords" component={Search} />

//       <Route path="*" component={NotFound} /> 
//     </Route>
//   </Router>
// );

export default Routes;
