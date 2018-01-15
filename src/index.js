import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeComponent from './Components/Home/HomeComponent';
import PPComponent from './Components/Footer/PPComponent';
import TermsComponent from './Components/Footer/TermsComponent';



let applicationTarget = document.getElementById('particles');


ReactDOM.render(
    <Router>
        <div>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/privacy" component={PPComponent} />
        <Route path="/terms" component={TermsComponent} />
        </div>
    </Router>,
    applicationTarget
);

registerServiceWorker();