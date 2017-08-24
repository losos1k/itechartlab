import { GET_COMMENT, GET_RATING, REPLACE_RATING } from '../actionTypes';

export function movieInfoActions(commentAuthorVal, commentDateVal, commentTextVal, movieIdVal) {
    return {
        type: GET_COMMENT,
        comments: {
            commentAuthor: commentAuthorVal,
            commentDate: commentDateVal,
            commentText: commentTextVal,
            movieId: movieIdVal
        }
    }
}

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

export function replaceRatingAction(rateVal, movieIdVal, loginVal) {
    return {
        type: REPLACE_RATING,
        rating: {
            rating: rateVal,
            movieId: movieIdVal,
            login: loginVal,
        }
    }
}
