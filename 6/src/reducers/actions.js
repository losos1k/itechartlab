export const CHANGE_LOGIN = 'CHANGE_LOGIN';

export function loginDispatcher(dispatch) {
    return {
        setLogin: (actionType, loginVal, passwordVal) => {
            dispatch({
                type: actionType,
                login: loginVal,
                password: passwordVal,
            })
        }
    }
}
