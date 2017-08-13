import { combineReducers, createStore } from 'redux'
import reducers from '../reducers/reducers'

const store = createStore(reducers);

store.subscribe(() => {
  store.getState();
})

store.dispatch({ type: 'CHANGE_LOGIN', loginValue: 'log', passwordValue : 'pass' });

export default store;
