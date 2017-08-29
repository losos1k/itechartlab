import axios from 'axios';

export function getMoviesFromJson() {
    return axios.get(`http://localhost:3000/movies`)
        .then((response) => {
            return response.data;
        })
}

export function sendUserInfo(login, password) {
    return axios.post('http://localhost:3000/users', {
        login: login,
        password: password
    })
}
