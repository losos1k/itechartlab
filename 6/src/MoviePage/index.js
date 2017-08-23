import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';

import './index.css';
import '../MovieListPage/index.css';

import Comments from './components/Comments';
import Rating from './components/Rating';
import Gallery from './components/Gallery';
import Header from './components/Header';

const mapStateToProps = (store) => {
    return {
        movies: store.movies.movies,
    };
}
@connect(mapStateToProps)
class MovieInfo extends Component {
    constructor() {
        super();

        this.state = {
            open: false,
        }
    }

    static defaultProps = {
        movies: [],
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const movieId = this.props.match.params.id;
        const movieInfo = this.props.movies.filter((movie) => movie.id === +movieId)[0];

        return (
            <div>
                <Header movieInfo={movieInfo} history={this.props.history} page="Movie"/>
                <section className="movie-info">
                    <Paper zDepth={1} className='movie-list__movie'>
                        <div onClick={this.handleOpen}><img src={movieInfo.poster} /></div>
                        <Dialog
                            modal={false}
                            className="movie-info__images"
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            <img src={movieInfo.poster} />
                        </Dialog>
                        <section className="movie-list__movie-description">
                            <h2>{movieInfo.title}</h2>
                            <p>{movieInfo.description}</p>
                            <p><b>Year: {movieInfo.year}</b></p>
                            <Rating movieId={this.props.match.params.id} />
                        </section>
                    </Paper>
                    <Gallery movieId={this.props.match.params.id} movieInfo={movieInfo} />
                </section>
                <Comments movieId={this.props.match.params.id} />
            </div>
        );
    }
}

export default MovieInfo;
