import { GET_RATING, REPLACE_RATING } from '../actionTypes'

const commentsReducer = (state = [], action) => {

    switch (action.type) {

        case GET_RATING: {
            return [...state, action.rating];
            break;
        }

        case REPLACE_RATING: (state, action) => ({
            ...state,
            items: state.items.filter(item => action.payload !== item),
            lastUpdated: Date.now() 
          })
    }
    return state;
};

export default commentsReducer;
