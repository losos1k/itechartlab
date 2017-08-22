import { CHANGE_LOGIN } from '../actionTypes'

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case CHANGE_LOGIN: {
            return { ...state, login: action.login, password: action.password };
            break;
        }
    }
    return state;
};

const initialState = {
    login: null,
    password: null
};

export default userReducer;
