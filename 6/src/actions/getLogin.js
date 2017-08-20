import { CHANGE_LOGIN } from '../actions/actionTypes';

export function getLogin(loginVal, passwordVal) {
    return {
        type: CHANGE_LOGIN,
        login: loginVal,
        password: passwordVal,
    }
}
