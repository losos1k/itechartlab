import { sendUserInfo } from '../services/queries';
import { SET_USER } from '../actionTypes';

export const setUserAction = (loginVal, passwordVal, loginType) => (dispatch) => {
    return sendUserInfo(loginVal, passwordVal, loginType)
        .then(data => {
            dispatch({
                type: SET_USER,
                login: data.login,
                password: data.password,
            })
            return Promise.resolve();
        })
        .catch(err => console.log(err))
}
