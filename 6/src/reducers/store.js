import { combineReducers, createStore } from 'redux'
import reducers from '../reducers/reducers'

const store = createStore(reducers);

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({ type: 'CHANGE_LOGIN', loginValue: 'log', passwordValue : 'pass' });
store.dispatch({ type: 'CHANGE_LOGIN', loginValue: 'log1', passwordValue : 'pass1' });

export default store;
