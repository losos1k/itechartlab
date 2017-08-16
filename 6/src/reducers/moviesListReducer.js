import { FETCH_MOVIES } from '../reducers/actions'

const moviesListReducer = (state = [], action) => {

    switch (action.type) {
        case FETCH_MOVIES: {
            return { ...state };
            break;
        }
    }
    return state;
};

export default moviesListReducer;
