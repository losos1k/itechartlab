import { SET_USER } from '../actionTypes';

export function setUserAction(loginVal, passwordVal) {
    return {
        type: SET_USER,
        login: loginVal,
        password: passwordVal,
    }
}
