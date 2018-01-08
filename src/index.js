import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { hashHistory } from 'react-router';
import Routes from './routes';



let applicationTarget = document.getElementById('particles');

// Redux store
// import { Provider } from 'react-redux';
// import { store } from './state/store';
//ReactDOM.render(
//    <Provider store={store}>
//      <Routes history={hashHistory}/>
//    </Provider>,
//    target
//  );

ReactDOM.render(
    <Routes history={hashHistory} />, 
    applicationTarget    
);

registerServiceWorker();