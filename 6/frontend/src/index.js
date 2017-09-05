import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import storeCreate from './storeCreate';

import App from './App';

ReactDOM.render(
        <Provider store={storeCreate()}>
            <App />
        </Provider>,
    document.getElementById('root'));
