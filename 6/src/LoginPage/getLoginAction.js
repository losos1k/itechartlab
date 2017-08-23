import { CHANGE_LOGIN } from '../actionTypes';

export function getLoginAction(loginVal, passwordVal) {
    return {
        type: CHANGE_LOGIN,
        login: loginVal,
        password: passwordVal,
    }
}
