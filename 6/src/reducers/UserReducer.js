import { CHANGE_LOGIN } from '../reducers/actions'

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_LOGIN: {
            return { ...state, login: action.loginValue, password: action.passwordValue };
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
