import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'

import { fetchMoviesData } from '../../actions/actions';
class MovieInfo extends Component {
    render() {
        return (
            <h1><Link to='/movies_list'>Back</Link></h1>
        );
    }
}

export default MovieInfo;
