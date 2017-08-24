import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRatingAction, replaceRatingAction } from '../movieInfoActions';
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
        replaceRatingAction: (rateVal, movieIdVal, loginVal) => dispatch(replaceRatingAction(rateVal, movieIdVal, loginVal)),
    })
}

@connect(mapStateToProps, mapDispatchToProps)
class Rating extends Component {

    handleRating = (rateVal) => {
        const movieIdVal = this.props.movieId;
        if (this.props.rating.some(rating => rating.login === this.props.login && rating.movieId === movieIdVal)) {
            this.props.replaceRatingAction(
                rateVal,
                movieIdVal,
                this.props.login
            )
        } else {
            this.props.getRatingAction(
                rateVal,
                movieIdVal,
                this.props.login
            )
        }
    };

    render() {
        const movieRating = this.props.rating.filter(rating => rating.movieId === this.props.movieId);
        const mappedRating = movieRating.map((rating, index) => rating.rating)
        console.log(mappedRating)
        const index = 0;
        let ratingValue = mappedRating[index];

        return (
            <ReactStars count={5} onChange={this.handleRating} size={24} color2={'#ffd700'} value={ratingValue} />
        );
    }
}

export default Rating;
