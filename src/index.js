import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Layout from './Layout';
import Client from './Client';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

