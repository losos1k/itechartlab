import { SET_RATING, UPDATE_RATING } from '../actionTypes'

const ratingReducer = (state = [], action) => {

    switch (action.type) {

        case SET_RATING: {
            return [...state, action.rating];
            break;
        }

        case UPDATE_RATING: {
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
