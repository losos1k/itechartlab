import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from './reducers/reducers'

const logger = createLogger();
const middleware = applyMiddleware(logger);

const storeCreate = () => createStore(reducers, middleware);

export default storeCreate;
