import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'

import { fetchMoviesData } from '../../actions/actions';
import * as actionTypes from '../../reducers/actionTypes'

import './index.css';

@connect((store) => {
    return {
        movies: store.movies.movies
    };
}, fetchMoviesData)
class MoviesList extends Component {
    static defaultProps = {
        movies: []
    }

    componentWillMount() {
        this.props.getMovies(actionTypes.FETCH_MOVIES);
    }

    render() {
        const mappedMovies = this.props.movies.map(movie => {
            return <p key={movie.id}>
                {movie.id + ' '}
                <img src={movie.images[0]} />
                {movie.title}
            </p>
        })

        return (
            <div>
                <nav></nav>
                <div></div>
                <div>{mappedMovies}</div>
            </div>
        );
    }
}

export default MoviesList;
