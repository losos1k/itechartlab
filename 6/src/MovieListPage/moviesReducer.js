import { SET_MOVIES } from '../actionTypes'

const moviesReducer = (state = [], action) => {

    switch (action.type) {

        case SET_MOVIES: {
            return [...action.movies];
            break;
        }
    }
    return state;
};

export default moviesReducer;
