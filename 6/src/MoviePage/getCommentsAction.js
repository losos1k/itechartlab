import { GET_COMMENT } from '../actionTypes';

export function getCommentsAction(commentAuthorVal, commentDateVal, commentTextVal, movieIdVal) {
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
