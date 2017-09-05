import { combineReducers } from 'redux';
import userReducer from './LoginPage/userReducer';
import moviesReducer from './MovieListPage/moviesReducer';
import commentsReducer from './MoviePage/commentsReducer';
import ratingReducer from './MoviePage/ratingReducer';

const reducers = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  comments: commentsReducer,
  rating: ratingReducer,
})

export default reducers;
