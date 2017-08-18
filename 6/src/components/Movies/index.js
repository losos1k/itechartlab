import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import { getComments } from '../../actions/getComments';

const mapStateToProps = (store) => {
    return {
        login: store.user.login,
        movies: store.movies.movies,
        comments: store.comments.comments,
    };
}

const mapDispatchToProps = () => {
    return dispatch => ({
        getComments: (commentAuthorVal, commentDateVal, commentTextVal, movieIdVal) => {
            dispatch(getComments(commentAuthorVal, commentDateVal, commentTextVal, movieIdVal))
        }
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
        };
    }

    static defaultProps = {
        movies: [],
        comments: [],
    }

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
    }

    hadleCommentSubmit = (e) => {
        this.props.getComments(
            this.state.commentAuthor,
            this.state.commentDate,
            this.state.commentText,
            this.state.movieId);
    }

    render() {
        const movieId = this.props.match.params.id;
        const selectedMovie = this.props.movies.filter((movie) => movie.id === +movieId)[0];
        const filteredComments = this.props.comments.filter(comment => comment.movieId === movieId);
        const mappedComments = filteredComments.map((comment, index) => {
            return <p key={index}>
                {comment.commentAuthor} commented on {comment.commentDate}: {comment.commentText}
            </p>
        })
        return (
            <div>
                <h1>{selectedMovie.title}</h1>
                <div>{selectedMovie.description}</div>
                <img src={selectedMovie.images[0]} />
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
