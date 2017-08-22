import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';

import './index.css';
import '../MoviesList/index.css';

import Comments from './Comments';
import Rating from './Rating';
import Gallery from './Gallery';
import Header from './Header';

const mapStateToProps = (store) => {
    return {
        movies: store.movies.movies,
    };
}
@connect(mapStateToProps)
class MovieInfo extends Component {
    static defaultProps = {
        movies: [],
    };

    render() {
        const movieId = this.props.match.params.id;
        const movieInfo = this.props.movies.filter((movie) => movie.id === +movieId)[0];

        return (
            <div>
                <Header movieInfo={movieInfo} history={this.props.history} />
                <section className="movie-info">
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
                <Comments movieId={this.props.match.params.id} />
            </div>
        );
    }
}

export default MovieInfo;
