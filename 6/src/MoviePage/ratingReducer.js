import { GET_RATING } from '../actionTypes'

const commentsReducer = (state = [], action) => {

    switch (action.type) {

        case GET_RATING: {
            return [...state, action.rating];
            break;
        }
    }
    return state;
};

export default commentsReducer;
