import { getMoviesFromJson } from '../services/queries';
import { FETCH_MOVIES } from '../actionTypes';

export const getMoviesAction = () => (dispatch) => {
    return getMoviesFromJson()
        .then(data => {
            dispatch({
                type: FETCH_MOVIES,
                movies: data,
            })
        });
}
