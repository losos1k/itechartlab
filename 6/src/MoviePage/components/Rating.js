import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRatingAction, updateRatingAction } from '../movieInfoActions';
import ReactStars from 'react-stars'

const mapStateToProps = (store) => {
    return {
        login: store.user.login,
        rating: store.rating,
    };
}

const mapDispatchToProps = () => {
    return dispatch => ({
        setRatingAction: (rateVal, movieIdVal, loginVal) => dispatch(setRatingAction(rateVal, movieIdVal, loginVal)),
        updateRatingAction: (rateVal, movieIdVal, loginVal) => dispatch(updateRatingAction(rateVal, movieIdVal, loginVal)),
    })
}

@connect(mapStateToProps, mapDispatchToProps)
class Rating extends Component {

    handleRating = (rateVal) => {
        const movieIdVal = this.props.movieId;
        if (this.props.rating.some(rating => rating.login === this.props.login && rating.movieId === movieIdVal)) {
            this.props.updateRatingAction(
                rateVal,
                movieIdVal,
                this.props.login
            )
        } else {
            this.props.setRatingAction(
                rateVal,
                movieIdVal,
                this.props.login
            )
        }
    };

    render() {
        let ratingValue = 0;
        const movieRating = this.props.rating.filter(rating => rating.movieId === this.props.movieId);
        const mappedRating = movieRating.map((rating, index) => rating.rating)
        let sum = mappedRating.reduce((a, b) => a + b, 0);
        sum === 0 ? ratingValue = 0 : ratingValue = (sum / mappedRating.length).toFixed(2);

        return (
            <div>
                <ReactStars
                    count={5}
                    onChange={this.handleRating}
                    size={24}
                    color2={'#ffd700'}
                    value={Math.round(ratingValue)} />
                {ratingValue !== NaN && <span><b>Rating: </b>{ratingValue} of 5</span>}
            </div>
        );
    }
}

export default Rating;
