import { REPLACE_RATING } from '../actionTypes';

export function replaceRating(rateVal, movieIdVal, loginVal) {
    return {
        type: REPLACE_RATING,
        rating: {
            rating: rateVal,
            movieId: movieIdVal,
            login: loginVal,
        }
    }
}
