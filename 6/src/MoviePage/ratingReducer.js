import { GET_RATING, REPLACE_RATING } from '../actionTypes'

const ratingReducer = (state = [], action) => {

    switch (action.type) {

        case GET_RATING: {
            return [...state, action.rating];
            break;
        }

        case REPLACE_RATING: {
            return [
                ...state.filter(rating => {
                    return rating.login !== action.rating.login || rating.movieId !== action.rating.movieId
                }),
                action.rating
            ]
            break;
        }
    }
    return state;
};

export default ratingReducer;
