import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/scss/bootstrap-grid.scss';
import 'font-awesome/scss/font-awesome.scss'
import 'animate.css/animate.css'

ReactDOM.render(
    <App />,
    document.getElementById('root')

);


serviceWorker.unregister();
