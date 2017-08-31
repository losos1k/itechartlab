import { getMoviesList } from '../services/queries';
import { SET_MOVIES } from '../actionTypes';

export const setMovies = () => (dispatch, getState) => {

    let state = getState();
    let moviesList = state.movies;

    if (moviesList.length === 0) {
        return getMoviesList()
            .then(data => {
                dispatch({
                    type: SET_MOVIES,
                    movies: data,
                })
            });
    } else {
        return Promise.resolve();
    }
}
