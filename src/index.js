import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ParticleComponent from './Components/particle';

ReactDOM.render(<ParticleComponent />, document.getElementById('particles'));

          

registerServiceWorker();
