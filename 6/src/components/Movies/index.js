import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import { Breadcrumb} from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import './index.css';
import '../MoviesList/index.css';

import Comments from './Comments';
import Rating from './Rating';
import Gallery from './Gallery';

const mapStateToProps = (store) => {
    return {
        login: store.user.login,
        movies: store.movies.movies,
    };
}

const mapDispatchToProps = () => {
    return dispatch => ({
        getComments: (commentAuthorVal, commentDateVal, commentTextVal, movieIdVal) => {
            dispatch(getComments(commentAuthorVal, commentDateVal, commentTextVal, movieIdVal))
        },
        getRating: (rateVal, movieIdVal) => dispatch(getRating(rateVal, movieIdVal)),
    })
}

@connect(mapStateToProps, mapDispatchToProps)
class MovieInfo extends Component {
    static defaultProps = {
        movies: [],
    };

    logout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('password');
        localStorage.removeItem('isLogin');
        this.props.history.push(`/`)
    }

    getGallery = (sliceStart, sliceEnd) => {
        const movieId = this.props.match.params.id;
        const movieInfo = this.props.movies.filter((movie) => movie.id === +movieId)[0];
        return movieInfo.images.slice(sliceStart, sliceEnd).map((photo, index) => {
            return <span key={index}>
                <img src={photo} />
            </span>
        });
    };

    render() {
        const movieId = this.props.match.params.id;
        const movieInfo = this.props.movies.filter((movie) => movie.id === +movieId)[0];

        return (
            <div>
                <header>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            Movie List
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            {movieInfo.title}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <p>{this.props.login}</p>
                    <FlatButton label="Logout" primary={true} onClick={this.logout} />
                </header>
                <section>
                    <Paper zDepth={1} className='movie-list__movie'>
                        <div><img src={movieInfo.poster} /></div>
                        <section className="movie-list__movie-description">
                            <h2>{movieInfo.title}</h2>
                            <p>{movieInfo.description}</p>
                            <p><b>Year: {movieInfo.year}</b></p>
                        </section>
                    </Paper>
                    <Gallery movieId={this.props.match.params.id} movieInfo={movieInfo} />
                </section>
                <Rating movieId={this.props.match.params.id} />
                <Comments movieId={this.props.match.params.id} login={this.props.login} />
            </div>
        );
    }
}

export default MovieInfo;
