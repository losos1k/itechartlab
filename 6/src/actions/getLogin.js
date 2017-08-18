import { actionTypes } from '../actions/actionTypes';

export function getLogin(loginVal, passwordVal) {
    return {
        type: actionTypes.CHANGE_LOGIN,
        login: loginVal,
        password: passwordVal,
    }
}
