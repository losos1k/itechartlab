import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import { getComments } from '../../actions/getComments';
import { getRating } from '../../actions/getRating';
import ReactStars from 'react-stars'

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
                <h1>{movieInfo.title}</h1>
                <div>{movieInfo.description}</div>
                <img src={movieInfo.images[0]} />
                <ReactStars count={5} onChange={this.handleRating} size={24} color2={'#ffd700'} value={ratingValue} />
                <div>
                    <input type="text" onChange={this.handleCommentInput} placeholder="Type your comment here..." />
                    <input type="submit" defaultValue="Send comment" onClick={this.hadleCommentSubmit} />
                </div>
                <h6>{mappedComments}</h6>
                <h1><Link to='/movies'>Back</Link></h1>
            </div>
        );
    }
}

export default MovieInfo;
