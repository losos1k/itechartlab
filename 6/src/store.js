import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from './reducers/reducers'

const logger = createLogger();
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

store.subscribe(() => {
    store.getState();
});

store.dispatch((dispatch) => {
    dispatch({type: 'CHANGE_LOGIN', login: 'kkk', password: 'fffff'})
})

export default store;
