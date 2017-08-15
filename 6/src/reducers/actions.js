export const CHANGE_LOGIN = {
    type: 'CHANGE_LOGIN'
}

export function loginDispatcher(dispatch) {
    return {
        setLogin: (actionType, loginVal, passwordVal) => {
            dispatch({
                type: actionType.type,
                login: loginVal,
                password: passwordVal,
            })
        }
    }
}
