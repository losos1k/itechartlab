import { GET_COMMENT } from '../actions/actionTypes'

const commentsReducer = (state = [], action) => {

    switch (action.type) {

        case GET_COMMENT: {
            return [...state, action.comments];
            break;
        }
    }
    return state;
};

export default commentsReducer;
