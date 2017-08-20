import { GET_RATING } from '../actions/actionTypes';

export function getRating(rateVal, movieIdVal) {
    return {
        type: GET_RATING,
        rating: {
            rating: rateVal,
            movieId: movieIdVal,
        }
    }
}
