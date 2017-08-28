import { SET_COMMENT, SET_RATING, UPDATE_RATING } from '../actionTypes';

export function setCommentAction(commentAuthorVal, commentDateVal, commentTextVal, movieIdVal) {
    return {
        type: SET_COMMENT,
        comments: {
            commentAuthor: commentAuthorVal,
            commentDate: commentDateVal,
            commentText: commentTextVal,
            movieId: movieIdVal
        }
    }
}

export function setRatingAction(rateVal, movieIdVal, loginVal) {
    return {
        type: SET_RATING,
        rating: {
            rating: rateVal,
            movieId: movieIdVal,
            login: loginVal,
        }
    }
}

export function updateRatingAction(rateVal, movieIdVal, loginVal) {
    return {
        type: UPDATE_RATING,
        rating: {
            rating: rateVal,
            movieId: movieIdVal,
            login: loginVal,
        }
    }
}
