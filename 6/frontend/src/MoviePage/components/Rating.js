import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovieRating, addNewRating, resetMovieRating } from '../movieInfoActions';
import ReactStars from 'react-stars'

const mapStateToProps = (store) => {
    return {
        login: store.user.login,
        rating: store.rating,
    };
}

const mapDispatchToProps = () => {
    return dispatch => ({
        getMovieRating: (rateVal, movieIdVal, loginVal) => dispatch(getMovieRating(rateVal, movieIdVal, loginVal)),
        addNewRating: (rateVal, movieIdVal, loginVal) => dispatch(addNewRating(rateVal, movieIdVal, loginVal)),
        resetMovieRating: () => dispatch(resetMovieRating()),
    })
}

@connect(mapStateToProps, mapDispatchToProps)
class Rating extends Component {

    componentWillMount = () => {
        this.props.getMovieRating(this.props.movieId);
    }

    componentWillUnmount = () => {
        this.props.resetMovieRating();
    }

    handleRating = (rateVal) => {
        const movieIdVal = this.props.movieId;
        console.log(rateVal)
        this.props.addNewRating(
            rateVal,
            movieIdVal,
            this.props.login
        )
    };

    render() {
        let ratingValue = 0;
        // const mappedRating = this.props.rating.map((rating, index) => rating.rating)
        // let sum = this.props.rating.reduce((a, b) => a + b, 0);
        // sum === 0 ? ratingValue = 0 : ratingValue = (sum / mappedRating.length).toFixed(2);

        return (
            <div>
                <ReactStars
                    count={5}
                    onChange={this.handleRating}
                    size={24}
                    color2={'#ffd700'}
                    value={this.props.rating.rating} />
                {ratingValue !== NaN && <span><b>Rating: </b>{ratingValue} of 5</span>}
            </div>
        );
    }
}

export default Rating;
