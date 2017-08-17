import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom';
import axios from 'axios';

import { fetchMoviesData } from '../../actions/fetchMoviesData';
import * as actionTypes from '../../reducers/actionTypes';
import MovieInfo from '../Movies/index';

import './index.css';

const mapStateToProps = (store) => {
    return {
        movies: store.movies.movies
    };
}

@connect(mapStateToProps, fetchMoviesData)
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
                <Link to={`/movie/${movie.id}`}>
                    {movie.id + ' '}
                    <img src={movie.images[0]} />
                    {movie.title}</Link>
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
