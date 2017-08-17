import axios from 'axios';

export function getQuery(url) {
    return axios.get(url)
        .then((response) => {
            return response.data;
        })
}
