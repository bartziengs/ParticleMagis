import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HomeComponent from './Components/Home/HomeComponent';

ReactDOM.render(<HomeComponent />, document.getElementById('particles'));

          

registerServiceWorker();
