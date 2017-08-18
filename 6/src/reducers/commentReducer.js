import { actionTypes } from '../actions/actionTypes'

const commentReducer = (state = initialState, action) => {

    switch (actionTypes.GET_COMMENT) {

        case actionTypes.GET_COMMENT: {
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
