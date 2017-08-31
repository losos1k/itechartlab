import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCommentAction, getComments, resetComments } from '../movieInfoActions';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const mapStateToProps = (store) => {
    return {
        login: store.user.login,
        comments: store.comments,
    };
}

const mapDispatchToProps = () => {
    return dispatch => ({
        getComments: (movieIdVal) => {
            return dispatch(getComments(movieIdVal))
        },
        setCommentAction: (commentAuthorVal, commentDateVal, commentTextVal, movieIdVal) => {
            return dispatch(setCommentAction(commentAuthorVal, commentDateVal, commentTextVal, movieIdVal))
        },
        resetComments: () => {
            return dispatch(resetComments())
        },
    })
}

@connect(mapStateToProps, mapDispatchToProps)
class Comments extends Component {
    constructor() {
        super();
        this.state = {
            commentAuthor: '',
            commentDate: '',
            commentText: '',
            movieId: ''
        };
    };

    static defaultProps = {
        comments: [],
    };

    componentWillMount = () => {
        this.props.getComments(this.props.movieId);
    }

    componentWillUnmount = () => {
        this.props.resetComments();
    }

    handleCommentInput = (e) => {
        const movieIdVal = this.props.movieId;
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
        this.props.setCommentAction(
            this.state.commentAuthor,
            this.state.commentDate,
            this.state.commentText,
            this.state.movieId);
    };

    render() {
        const mappedComments = this.props.comments.map((comment, index) => {
            return <p key={index}>
                <b>{comment.commentAuthor}</b> commented on {comment.commentDate}: <b>{comment.commentText}</b>
            </p>
        });

        return (
            <section className="movie-info__comments">
                <TextField
                    hintText="Type your comment here..."
                    floatingLabelText="Comment"
                    fullWidth={true}
                    onChange={this.handleCommentInput}
                /><br />
                <Paper zDepth={1} className="movie-info__comments-item">{mappedComments}</Paper>
                <RaisedButton label="Send comment" fullWidth={true} onClick={this.hadleCommentSubmit} primary={true} />
            </section>
        );
    }
}

export default Comments;
