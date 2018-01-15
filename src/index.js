import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HashRouter from 'react-router-dom';
import HomeComponent from './Components/Home/HomeComponent';
import PPComponent from './Components/Footer/PPComponent';
import TermsComponent from './Components/Footer/TermsComponent';

let applicationTarget = document.getElementById('particles');

ReactDOM.render(
    <HashRouter>
        <div>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/privacy" component={PPComponent} />
        <Route path="/terms" component={TermsComponent} />
        </div>
    </HashRouter>,
    applicationTarget
);

registerServiceWorker();