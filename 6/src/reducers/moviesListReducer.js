import { FETCH_MOVIES } from '../reducers/actionTypes'

const moviesListReducer = (state = [], action) => {

    switch (action.type) {

        case FETCH_MOVIES.type: {
            return { ...state, movies: action.movies };
            break;
        }
    }
    return state;
};

export default moviesListReducer;
