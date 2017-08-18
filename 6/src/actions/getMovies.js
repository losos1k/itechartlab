import { getMoviesFromJson } from '../services/queries';
import { actionTypes } from '../actions/actionTypes';

export const getMovies = () => (dispatch) => {
    return getMoviesFromJson()
        .then(data => {
            dispatch({
                type: actionTypes.FETCH_MOVIES,
                movies: data,
            })
        });
}
