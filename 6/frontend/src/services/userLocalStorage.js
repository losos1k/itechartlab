export function setLoginValue(loginValue) {
    return localStorage.setItem('login', loginValue);
}

export function setPasswordValue(passwordValue) {
    return localStorage.setItem('password', passwordValue);
}

export function getLoginValue() {
    return localStorage.getItem('login');
}

export function getPasswordValue() {
    return localStorage.getItem('password');
}

export function setIsLoginValue() {
    return localStorage.setItem('isLogin', true);
}

export function getIsLoginValue() {
    return localStorage.getItem('isLogin');
}
