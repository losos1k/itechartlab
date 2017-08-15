import { FETCH_MOVIES } from '../reducers/actions'

const moviesListReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_MOVIES: {
            return {
                ...state,
                id: action.idValue,
                title: action.titleValue,
                year: action.yearValue,
                description: action.descriptionValue,
                rating: action.ratingValue,
                images: action.imagesValue,
            };
            break;
        }
    }
    return state;
};

const initialState = {
    id: null,
    title: null,
    year: null,
    description: null,
    rating: null,
    images: null,
};

export default moviesListReducer;
