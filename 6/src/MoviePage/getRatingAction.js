import { GET_RATING } from '../actionTypes';

export function getRatingAction(rateVal, movieIdVal, loginVal) {
    return {
        type: GET_RATING,
        rating: {
            rating: rateVal,
            movieId: movieIdVal,
            login: loginVal,
        }
    }
}
