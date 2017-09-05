import { SET_COMMENT, UPDATE_COMMENT, RESET_COMMENT } from '../actionTypes'

const commentsReducer = (state = [], action) => {

    switch (action.type) {

        case SET_COMMENT: {
            return [...action.comments];
            break;
        }

        case UPDATE_COMMENT: {
            return [...state, action.comments];
            break;
        }

        case RESET_COMMENT: {
            return [];
            break;
        }
    }
    return state;
};

export default commentsReducer;
