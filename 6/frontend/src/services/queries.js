import axios from 'axios';
import { pathToServer } from './serverPath';

export function getMoviesList() {
    return axios.get(pathToServer + `/movies`)
        .then(response => {
            return response.data;
        })
}

export function sendUserData(login, password, loginType) {
    return axios.post(pathToServer + `/users/` + loginType, {
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

export function getCommentsList(movieId) {
    return axios.post(pathToServer + `/comments`, {
        movieId: movieId
    })
        .then(response => {
            return response.data;
        })
}

export function sendNewComment(commentAuthor, commentDate, commentText, movieId) {
    return axios.post(pathToServer + `/comments/add`, {
        commentAuthor: commentAuthor,
        commentDate: commentDate,
        commentText: commentText,
        movieId: movieId,
    })
        .then(response => {
            return response.data[0];
        })
}

export function getRating(movieId) {
    return axios.post(pathToServer + `/ratings`, {
        movieId: movieId
    })
        .then(response => {
            return response.data;
        })
}

export function sendNewRating(rateVal, movieIdVal, loginVal) {
    return axios.post(pathToServer + `/ratings/add`, {
        rating: rateVal,
        movieId: movieIdVal,
        login: loginVal,
    })
        .then(response => {
            return response.data;
        })
}
