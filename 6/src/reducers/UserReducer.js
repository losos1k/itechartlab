const UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CHANGE_LOGIN': {
            return { ...state, login: action.loginValue, password: action.passwordValue };
            break;
        }
        case 'CHANGE_PASSWORD': {
            return { ...state, password: action.value };
            break;
        }
    }
    return state;
};

const initialState = {
    login: null,
    password: null
};

export default UserReducer;
