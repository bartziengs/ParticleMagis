import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ParticleComponent from './Components/particle';
import HomeComponent from './Components/home';

ReactDOM.render(<HomeComponent />, document.getElementById('particles'));

          

registerServiceWorker();
