import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import moviesListReducer from '../reducers/moviesListReducer';
import commentReducer from '../reducers/commentReducer';

const reducers = combineReducers({
  user: userReducer,
  movies: moviesListReducer,
  comments: commentReducer,
})

export default reducers;
