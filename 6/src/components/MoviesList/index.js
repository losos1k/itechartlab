import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FETCH_MOVIES, fetchMoviesData } from '../../reducers/actions'

@connect((store) => {
    return {
        movies: store.movies
    };
}, fetchMoviesData)
class MoviesList extends Component {
    componentWillMount() {
        this.props.getMovies(FETCH_MOVIES);
    }

    
    render() {
        // const mappedMovies = this.props.movies.map(movie => <li key={movie.id}>{movie.title}</li>)
        console.log(this.props.movies);
        return (
            // <ul>{mappedMovies}</ul>
            <h1>Movies list</h1>
        );
    }
}

export default MoviesList;
