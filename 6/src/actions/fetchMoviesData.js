import { getQuery } from '../services/queries';

export function fetchMoviesData(dispatch) {
    return {
        getMovies: (actionType) => {
            getQuery(`../movies.json`)
                .then(data => {
                    dispatch({
                        type: actionType.type,
                        movies: data,
                    })
                });
        }
    }
}
