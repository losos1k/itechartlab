import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMoviesAction } from './setMoviesAction';
import _ from 'lodash';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import Header from '../MoviePage/components/Header';

import './index.css';

const sortAZ = 'title: A-Z';
const sortZA = 'title: Z-A';
const sortYearOldFirst = 'year: oldest first';
const sortYearNewFirst = 'year: newest first';

const mapStateToProps = (store) => {
    return {
        movies: store.movies,
        login: store.user.login,
    };
}

const mapDispatchToProps = () => {
    return dispatch => ({
        setMoviesAction: () => dispatch(setMoviesAction())
    })
}

@connect(mapStateToProps, mapDispatchToProps)
class MoviesList extends Component {
    constructor() {
        super();

        this.state = {
            search: '',
            sortOrder: sortAZ,
            loadMoviesAmount: 10,
        };
    }

    static defaultProps = {
        movies: [],
    }

    componentDidMount() {
        this.props.setMoviesAction();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }

    handleScroll = () => {
        if (this.getDocHeight() - 100 <= document.body.scrollTop + window.innerHeight) {
            this.setState((prevState) => ({
                loadMoviesAmount: prevState.loadMoviesAmount + 10,
            }))
        }
    }

    handleSearch = (e) => {
        this.setState({ search: e.target.value })
    }

    handleSelect = (e) => {
        this.setState({ sortOrder: e.target.value })
    }

    filterMovies = () => {
        const moviesList = this.props.movies.slice(0, this.state.loadMoviesAmount).filter(movie => {
            return movie.title.toLowerCase().indexOf(
                this.state.search.toLowerCase()) !== -1;
        });
        let filteredList = [];
        switch (this.state.sortOrder) {
            case sortAZ:
                filteredList = _.orderBy(moviesList, 'title', 'asc');
                break;

            case sortZA:
                filteredList = _.orderBy(moviesList, 'title', 'desc');
                break;

            case sortYearOldFirst:
                filteredList = _.orderBy(moviesList, 'year', 'asc');
                break;

            case sortYearNewFirst:
                filteredList = _.orderBy(moviesList, 'year', 'desc');
                break;
        }
        return filteredList.map(movie => {
            return <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                    <Paper zDepth={1} className='movie-list__movie'>
                        <div><img src={movie.poster} /></div>
                        <section className="movie-list__movie-description">
                            <h2>{movie.title}</h2>
                            <p>{movie.description}</p>
                            <p><b>Year: {movie.year}</b></p>
                        </section>
                    </Paper>
                </Link>
            </div>
        })
    }

    render() {
        return (
            <div >
                <Header history={this.props.history} page="Movie List" />
                <div className="movie-list__movie-filter">
                    <TextField
                        hintText="For example: Fight Club..."
                        floatingLabelText="Search"
                        onChange={this.handleSearch}
                        value={this.state.search} />
                    <select value={this.state.sortOrder} onChange={this.handleSelect}>
                        <option value={sortAZ}>{sortAZ}</option>
                        <option value={sortZA}>{sortZA}</option>
                        <option value={sortYearOldFirst}>{sortYearOldFirst}</option>
                        <option value={sortYearNewFirst}>{sortYearNewFirst}</option>
                    </select>
                </div>
                <div>{this.filterMovies()}</div>
            </div >
        );
    }
}

export default MoviesList;
