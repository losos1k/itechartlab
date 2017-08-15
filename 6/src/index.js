import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/App';

ReactDOM.render(
    <BrowserRouter history={history}>
        <Route exact path="/" component={App} />
    </BrowserRouter>,
    document.getElementById('root'));
