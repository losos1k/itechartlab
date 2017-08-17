import { GET_COMMENT } from '../reducers/actionTypes'

const commentReducer = (state = [], action) => {

    switch (action.type) {

        case GET_COMMENT.type: {
            return {
                ...state,
                commentAuthor: action.commentAuthor,
                commentDate: action.commentDate,
                commentText: action.commentText,
            };
            break;
        }
    }
    return state;
};

export default commentReducer;
