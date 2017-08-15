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
    componentDidMount(){
        console.log(this.props.id);
    }
    render() {
        return (
            <h1>{this.props.id}</h1>
        );
    }
}

export default MoviesList;
