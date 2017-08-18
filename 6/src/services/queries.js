import axios from 'axios';

export function getMoviesFromJson() {
    return axios.get(`../movies.json`)
        .then((response) => {
            return response.data;
        })
}
