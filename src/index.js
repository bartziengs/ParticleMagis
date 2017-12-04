import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HomeComponent from './Components/home';

ReactDOM.render(<HomeComponent />, document.getElementById('particles'));

          

registerServiceWorker();
