import React, { Component } from 'react'
import MoviesList from '../MoviesList/index'
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'

class Movie extends Component {
    render() {
        console.log(this.props.mappedMovies)
        return (
            <div>
                <nav></nav>
                <div></div>
                <div><Link to='/movie'>{this.props.mappedMovies}</Link></div>
            </div>
        );
    }
}

export default Movie;
