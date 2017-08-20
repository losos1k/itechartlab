import { GET_COMMENT } from '../actions/actionTypes'

const commentReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_COMMENT: {
            return {
                ...state,
                comments: [...state.comments, action.comments]
            };
            break;
        }
    }
    return state;
};

const initialState = {
    comments: []
}

export default commentReducer;
