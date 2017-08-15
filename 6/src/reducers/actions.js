import axios from 'axios';

export const CHANGE_LOGIN = {
    type: 'CHANGE_LOGIN'
}

export const FETCH_MOVIES = {
    type: 'FETCH_MOVIES'
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

export function fetchMoviesData(dispatch) {
    return {
        getMovies: (actionType) => {
            axios.get(`../movies.json`)
                .then((data) => {
                    dispatch({
                        type: actionType.type,
                        movies: data.data,
                    })
                })
        }
    }
}
