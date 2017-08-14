export function loginDispatcher() {
    return {
        type: 'CHANGE_LOGIN',
        loginValue: 'this.state.login',
        passwordValue: 'this.state.password'
    }
}

// { type: 'CHANGE_LOGIN', loginValue: this.state.login, passwordValue: this.state.password }
