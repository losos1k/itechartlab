import { getMoviesFromJson } from '../services/queries';
import { SET_MOVIES } from '../actionTypes';

export const setMoviesAction = () => (dispatch, getState) => {

    let state = getState();
    let moviesList = state.movies;

    if (moviesList.length === 0) {
        return getMoviesFromJson()
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
