import { FETCH_MOVIES } from '../actionTypes'

const moviesReducer = (state = [], action) => {

    switch (action.type) {

        case FETCH_MOVIES: {
            return { ...state, movies: action.movies };
            break;
        }
    }
    return state;
};

export default moviesReducer;
