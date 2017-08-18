import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import reducers from './reducers/reducers'

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

const storeCreate = () => createStore(reducers, middleware);

export default storeCreate;
