import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from './reducers/reducers'

const logger = createLogger();
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

store.subscribe(() => {
    store.getState();
});

export default store;
