import axios from 'axios';

export function getMoviesFromJson() {
    return axios.get(`http://localhost:3000/movies`)
        .then((response) => {
            return response.data;
        })
}

export function sendUserInfo(login, password, loginType) {
    return axios.post('http://localhost:3000/users/' + loginType, {
        login: login,
        password: password
    })
        .then((response) => {
            console.log(response.data)
            return response.data;
        })
        .catch(err => console.log(err))
}
