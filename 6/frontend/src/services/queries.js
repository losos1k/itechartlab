import axios from 'axios';

export function getMoviesFromJson() {
    return axios.get(`http://localhost:3000/movies`)
        .then(response => {
            return response.data;
        })
}

export function sendUserInfo(login, password, loginType) {
    return axios.post('http://localhost:3000/users/' + loginType, {
        login: login,
        password: password
    })
        .then(response => {
            return response.data;
        })
        .catch(err => {
            return Promise.reject();
        })
}

export function getCommentsFromDB(movieId) {
    return axios.post(`http://localhost:3000/comments`, {
        movieId: movieId
    })
        .then(response => {
            return response.data;
        })
}

export function sendComment(commentAuthor, commentDate, commentText, movieId) {
    return axios.post(`http://localhost:3000/comments/add`, {
        commentAuthor: commentAuthor,
        commentDate: commentDate,
        commentText: commentText,
        movieId: movieId,
    })
        .then(response => {
            return response.data[0];
        })
}