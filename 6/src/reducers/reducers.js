import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import moviesReducer from '../reducers/moviesReducer';
import commentReducer from '../reducers/commentReducer';

const reducers = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  comments: commentReducer,
})

export default reducers;
