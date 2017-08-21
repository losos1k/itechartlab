import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import { getComments } from '../../actions/getComments';
import { getRating } from '../../actions/getRating';
import ReactStars from 'react-stars'
import { Breadcrumb, Carousel } from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import './index.css';
import '../MoviesList/index.css';

const mapStateToProps = (store) => {
    return {
        login: store.user.login,
        movies: store.movies.movies,
        comments: store.comments,
        rating: store.rating,
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
    constructor() {
        super();
        this.state = {
            commentAuthor: '',
            commentDate: '',
            commentText: '',
            movieId: '',
            rating: [],
        };
    };

    static defaultProps = {
        movies: [],
        comments: [],

    };

    handleCommentInput = (e) => {
        const movieIdVal = this.props.match.params.id;
        const commentVal = e.target.value;
        const now = new Date();
        this.setState({
            commentAuthor: this.props.login,
            commentDate: String(String(now.getDate()) + '.' + String(now.getMonth() + 1) + '.' + now.getFullYear())
            + ' ' + String(now.getHours()) + ':' + String(now.getMinutes()),
            commentText: commentVal,
            movieId: movieIdVal,
        });
    };

    hadleCommentSubmit = (e) => {
        this.props.getComments(
            this.state.commentAuthor,
            this.state.commentDate,
            this.state.commentText,
            this.state.movieId);
    };

    handleRating = (rateVal) => {
        this.setState({ rating: rateVal }, () => {
            const movieIdVal = this.props.match.params.id;
            this.props.getRating(
                this.state.rating,
                movieIdVal
            );
        });
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
        const movieComments = this.props.comments.filter(comment => comment.movieId === movieId);
        const mappedComments = movieComments.map((comment, index) => {
            return <p key={index}>
                {comment.commentAuthor} commented on {comment.commentDate}: {comment.commentText}
            </p>
        });
        const movieRating = this.props.rating.filter(rating => rating.movieId === movieId);
        const mappedRating = movieRating.map((rating, index) => rating.rating)
        const index = mappedRating.length - 1;
        let ratingValue = mappedRating[index]

        return (
            <div>
                <header>
                    <Breadcrumb>
                        <Link to={`/movies`}>
                            <Breadcrumb.Item>
                                Movie List
                        </Breadcrumb.Item>
                        </Link>
                        <Breadcrumb.Item active>
                            {movieInfo.title}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <p>{this.props.login}</p>
                    <FlatButton label="Logout" primary={true} onClick={this.logout} />
                </header>
                <section>
                    <Paper zDepth={1} className='movie-list__movie'>
                        <div><img src={movieInfo.images[0]} /></div>
                        <section className="movie-list__movie-description">
                            <h2>{movieInfo.title}</h2>
                            <p>{movieInfo.description}</p>
                            <p><b>Year: {movieInfo.year}</b></p>
                        </section>
                    </Paper>
                    <Carousel indicators={false} interval={null}>
                        <Carousel.Item className="movie-info__gallery">
                            {this.getGallery(0, 5)}
                        </Carousel.Item>
                        <Carousel.Item className="movie-info__gallery">
                            {this.getGallery(5, 10)}
                        </Carousel.Item>
                    </Carousel>
                </section>
                <ReactStars count={5} onChange={this.handleRating} size={24} color2={'#ffd700'} value={ratingValue} />
                <section className="movie-info__comments">
                    <TextField
                        hintText="Type your comment here..."
                        floatingLabelText="Comment"
                        fullWidth={true}
                        multiLine={true}
                        rows={2}
                        onChange={this.handleCommentInput}
                    /><br />
                    <Paper zDepth={1} className="movie-info__comments-item">{mappedComments}</Paper>
                    <RaisedButton label="Send comment" fullWidth={true} onClick={this.hadleCommentSubmit} />
                </section>
            </div>
        );
    }
}

export default MovieInfo;
