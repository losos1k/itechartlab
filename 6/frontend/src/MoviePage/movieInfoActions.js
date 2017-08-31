import { sendComment, getCommentsFromDB } from '../services/queries';
import { SET_COMMENT, SET_RATING, UPDATE_RATING, UPDATE_COMMENT, RESET_COMMENT } from '../actionTypes';

export const getComments = (movieIdVal) => (dispatch) => {
    return getCommentsFromDB(movieIdVal)
        .then(data => {
            dispatch({
                type: SET_COMMENT,
                comments: data,
            })
        });
}

export const setCommentAction = (commentAuthorVal, commentDateVal, commentTextVal, movieIdVal) => (dispatch) => {
    return sendComment(commentAuthorVal, commentDateVal, commentTextVal, movieIdVal)
        .then(data => {
            dispatch({
                type: UPDATE_COMMENT,
                comments: {
                    commentAuthor: data.commentAuthor,
                    commentDate: data.commentDate,
                    commentText: data.commentText,
                    movieId: data.movieId
                }
            })
            return Promise.resolve();
        })
}

export function resetComments() {
    return {
        type: RESET_COMMENT
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
