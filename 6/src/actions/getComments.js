import { actionTypes } from '../actions/actionTypes';

export function getComments(commentAuthorVal, commentDateVal, commentTextVal, movieIdVal) {
    return {
        type: actionType.GET_COMMENT,
        comments: {
            commentAuthor: commentAuthorVal,
            commentDate: commentDateVal,
            commentText: commentTextVal,
            movieId: movieIdVal
        }
    }
}
