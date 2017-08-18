import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { getMovies } from '../../actions/getMovies';
import { actionTypes } from '../../actions/actionTypes';

import MovieInfo from '../Movies/index';

import './index.css';

const mapStateToProps = (store) => {
    return {
        movies: store.movies.movies
    };
}

@connect(mapStateToProps)
class MoviesList extends Component {
    static defaultProps = {
        movies: []
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
        console.log(this.props.movies)
        return (
            <div>
                <nav>
                    <h1><Link to='/'>Logout</Link></h1>
                </nav>
                <div></div>
                <div>{mappedMovies}</div>
            </div>
        );
    }
}

export default MoviesList;
