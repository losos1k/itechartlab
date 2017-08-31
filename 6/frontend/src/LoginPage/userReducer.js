import { SET_USER, LOGOUT } from '../actionTypes'

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER: {
            return { ...state, login: action.login, id: action.id };
            break;
        }

        case LOGOUT: {
            return initialState;
            break;
        }
    }
    return state;
};

const initialState = {
    login: null,
    id: null
};

export default userReducer;
