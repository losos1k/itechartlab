import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import moviesReducer from '../reducers/moviesReducer';
import commentsReducer from '../reducers/commentsReducer';
import ratingReducer from '../reducers/ratingReducer';

const reducers = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  comments: commentsReducer,
  rating: ratingReducer,
})

export default reducers;
