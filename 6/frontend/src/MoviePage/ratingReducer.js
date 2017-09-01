import { SET_RATING, UPDATE_RATING, RESET_RATING } from '../actionTypes'

const ratingReducer = (state = {}, action) => {

    switch (action.type) {

        case SET_RATING: {
            return { ...action.rating };
            break;
        }

        case UPDATE_RATING: {
            return { ...action.rating };
            // return [
            //     ...state.filter(rating => {
            //         return rating.login !== action.rating.login || rating.movieId !== action.rating.movieId
            //     }),
            //     action.rating
            // ]
            break;
        }

        case RESET_RATING: {
            return {}
            break;
        }
    }
    return state;
};

export default ratingReducer;
