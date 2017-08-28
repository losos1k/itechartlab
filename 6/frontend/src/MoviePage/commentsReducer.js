import { SET_COMMENT } from '../actionTypes'

const commentsReducer = (state = [], action) => {

    switch (action.type) {

        case SET_COMMENT: {
            return [...state, action.comments];
            break;
        }
    }
    return state;
};

export default commentsReducer;
