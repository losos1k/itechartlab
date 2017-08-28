import axios from 'axios';

export function getMoviesFromJson() {
    return axios.get(`http://localhost:3000/movies`)
        .then((response) => {
            return response.data;
        })
}
