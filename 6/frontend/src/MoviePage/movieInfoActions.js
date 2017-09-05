import { sendNewComment, getCommentsList, getRating, sendNewRating } from '../services/queries';
import { SET_COMMENT, SET_RATING, UPDATE_RATING, UPDATE_COMMENT, RESET_COMMENT, RESET_RATING } from '../actionTypes';

export const getMovieComments = (movieIdVal) => (dispatch) => {
    return getCommentsList(movieIdVal)
        .then(data => {
            dispatch({
                type: SET_COMMENT,
                comments: data,
            })
        });
}

export const addNewComment = (commentAuthorVal, commentDateVal, commentTextVal, movieIdVal) => (dispatch) => {
    return sendNewComment(commentAuthorVal, commentDateVal, commentTextVal, movieIdVal)
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
        })
}

export const resetMovieComments = () => {
    return {
        type: RESET_COMMENT
    }
}

export const getMovieRating = (movieIdVal) => (dispatch) => {
    return getRating(movieIdVal)
        .then(data => {
            dispatch({
                type: SET_RATING,
                rating: data,
            })
        });
}

export const addNewRating = (rateVal, movieIdVal, loginVal) => (dispatch) => {
    return sendNewRating(rateVal, movieIdVal, loginVal)
        .then(data => {
            dispatch({
                type: UPDATE_RATING,
                rating: data
            })
        })
}

export const resetMovieRating = () => {
    return {
        type: RESET_RATING
    }
}
