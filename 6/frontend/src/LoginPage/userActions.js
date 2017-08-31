import { sendUserData } from '../services/queries';
import { SET_USER, LOGOUT } from '../actionTypes';

export const userActions = (loginVal, passwordVal, loginType) => (dispatch) => {
    return sendUserData(loginVal, passwordVal, loginType)
        .then(data => {
            dispatch({
                type: SET_USER,
                id: data._id,
                login: data.login,
            })
            return Promise.resolve();
        })
}

export function logout() {
    return {
        type: LOGOUT
    }
}
