export function getComment(actionType, commentAuthorVal, commentDateVal, commentTextVal) {
    return {
        type: actionType.type,
        commentAuthor: commentAuthorVal,
        commentDate: commentDateVal,
        commentText: commentTextVal,
    }
}
