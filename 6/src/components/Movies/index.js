import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import { getComment } from '../../actions/getComment';
import * as actionTypes from '../../reducers/actionTypes';

const mapStateToProps = (store) => {
    return {
        login: store.user.login,
        movies: store.movies.movies,
        commentAuthor: store.comments.commentAuthor,
        commentDate: store.comments.commentDate,
        commentText: store.comments.commentText,
    };
}

const mapDispatchToProps = () => {
    return dispatch => ({
        getComment: (actionType, commentAuthorVal, commentDateVal, commentTextVal) => {
            dispatch(getComment(actionType, commentAuthorVal, commentDateVal, commentTextVal))
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
        };
    }

    static defaultProps = {
        movies: [],
    }

    handleCommentInput = (e) => {
        const commentVal = e.target.value;
        const nowDate = new Date();
        this.setState({
            commentAuthor: this.props.login,
            commentDate: nowDate.getDate(),
            commentText: commentVal,
        });
    }

    hadleCommentSubmit = (e) => {
        this.props.getComment(
            actionTypes.GET_COMMENT,
            this.state.commentAuthor,
            this.state.commentDate,
            this.state.commentText);
    }

    render() {
        const movieId = this.props.match.params.id;
        const selectedMovie = this.props.movies.filter((movie) => movie.id === +movieId)[0];
        return (
            <div>
                <h1>{selectedMovie.title}</h1>
                <div>{selectedMovie.description}</div>
                <img src={selectedMovie.images[0]} />
                <div>
                    <input type="text" onChange={this.handleCommentInput} placeholder="Type your comment here..." />
                    <input type="submit" defaultValue="Send comment" onClick={this.hadleCommentSubmit} />
                </div>
                <h6>{this.props.commentAuthor} commented at {this.props.commentDate} aug: {this.props.commentText}</h6>
                <h1><Link to='/movies'>Back</Link></h1>
            </div>
        );
    }
}

export default MovieInfo;
