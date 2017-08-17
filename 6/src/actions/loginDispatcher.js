export function loginDispatcher(actionType, loginVal, passwordVal) {
    return {
        type: actionType.type,
        login: loginVal,
        password: passwordVal,
    }
}
