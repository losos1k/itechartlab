import { actionTypes } from '../actions/actionTypes'

const moviesListReducer = (state = [], action) => {

    switch (actionTypes.FETCH_MOVIES) {

        case actionTypes.FETCH_MOVIES: {
            return { ...state, movies: action.movies };
            break;
        }
    }
    return state;
};

export default moviesListReducer;
