import { GET_COMMENT } from '../actions/actionTypes';

export function getComments(commentAuthorVal, commentDateVal, commentTextVal, movieIdVal) {
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
