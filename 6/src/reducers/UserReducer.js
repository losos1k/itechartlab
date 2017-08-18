import { actionTypes } from '../actions/actionTypes'

const userReducer = (state = initialState, action) => {

    switch (actionTypes.CHANGE_LOGIN) {
        
        case actionTypes.CHANGE_LOGIN: {
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
