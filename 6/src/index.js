import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeCreate from './storeCreate';

import App from './components/App';

ReactDOM.render(
    <BrowserRouter history={history}>
        <Provider store={storeCreate()}>
            <Route exact path="/" component={App} />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
