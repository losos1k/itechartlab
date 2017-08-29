import { sendUserInfo } from '../services/queries';
import { SET_USER } from '../actionTypes';

export const setUserAction = (loginVal, passwordVal) => (dispatch) => {
    return sendUserInfo(loginVal, passwordVal)
        .then(() => {
            dispatch({
                type: SET_USER,
                login: loginVal,
                password: passwordVal,
            })
        });
}
