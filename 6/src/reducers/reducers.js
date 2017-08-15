import { combineReducers } from 'redux'
import userReducer from '../reducers/userReducer'
import moviesListReducer from '../reducers/moviesListReducer'

const reducers = combineReducers({
  user: userReducer,
  movies: moviesListReducer,
})

export default reducers;
