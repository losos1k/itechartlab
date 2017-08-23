import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRatingAction } from '../getRatingAction';
import ReactStars from 'react-stars'

const mapStateToProps = (store) => {
    return {
        login: store.user.login,        
        rating: store.rating,
    };
}

const mapDispatchToProps = () => {
    return dispatch => ({
        getRatingAction: (rateVal, movieIdVal, loginVal) => dispatch(getRatingAction(rateVal, movieIdVal, loginVal)),
    })
}

@connect(mapStateToProps, mapDispatchToProps)
class Rating extends Component {
    constructor() {
        super();
        this.state = {
            rating: [],
        };
    };

    handleRating = (rateVal) => {
        this.setState({ rating: rateVal }, () => {
            const movieIdVal = this.props.movieId;
            this.props.getRatingAction(
                this.state.rating,
                movieIdVal,
                this.props.login
            );
        });
    };

    render() {
        const movieRating = this.props.rating.filter(rating => rating.movieId === this.props.movieId);
        const mappedRating = movieRating.map((rating, index) => rating.rating)
        const index = mappedRating.length - 1;
        let ratingValue = mappedRating[index];

        return (
            <ReactStars count={5} onChange={this.handleRating} size={24} color2={'#ffd700'} value={ratingValue} />
        );
    }
}

export default Rating;
