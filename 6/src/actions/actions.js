import axios from 'axios';

export function loginDispatcher(actionType, loginVal, passwordVal) {
    return {
        type: actionType.type,
        login: loginVal,
        password: passwordVal,
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
