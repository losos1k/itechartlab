import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import { fetchMoviesData } from '../../actions/fetchMoviesData';
import * as actionTypes from '../../reducers/actionTypes';

const mapStateToProps = (store) => {
    return {
        movies: store.movies.movies
    };
}

@connect(mapStateToProps, fetchMoviesData)
class MovieInfo extends Component {
    static defaultProps = {
        movies: []
    }

    render() {
        const movieId = this.props.match.params.id;
        const selectedMovie = this.props.movies.filter((movie) => movie.id === +movieId)[0];
        return (
            <div>
                <h1>{selectedMovie.title}</h1>
                <div>{selectedMovie.description}</div>
                <img src={selectedMovie.images[0]} />
                <h1><Link to='/movies'>Back</Link></h1>
            </div>
        );
    }
}

export default MovieInfo;
