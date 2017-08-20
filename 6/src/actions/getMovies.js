import { getMoviesFromJson } from '../services/queries';
import { FETCH_MOVIES } from '../actions/actionTypes';

export const getMovies = () => (dispatch) => {
    return getMoviesFromJson()
        .then(data => {
            dispatch({
                type: FETCH_MOVIES,
                movies: data,
            })
        });
}
