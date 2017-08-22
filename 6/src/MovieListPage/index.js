import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovies } from './getMovies';
import _ from 'lodash';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import Header from '../MoviePage/components/Header';

import './index.css';

const mapStateToProps = (store) => {
    return {
        movies: store.movies.movies,
        login: store.user.login,
    };
}

@connect(mapStateToProps)
class MoviesList extends Component {
    constructor() {
        super();

        this.state = {
            search: '',
            sortOrder: 'title: A-Z',
            loadMoviesAmount: 10,
        };
    }

    static defaultProps = {
        movies: [],
    }

    componentDidMount() {
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
            case 'title: A-Z':
                filteredList = _.orderBy(moviesList, 'title', 'asc');
                break;

            case 'title: Z-A':
                filteredList = _.orderBy(moviesList, 'title', 'desc');
                break;

            case 'year: oldest first':
                filteredList = _.orderBy(moviesList, 'year', 'asc');
                break;

            case 'year: newest first':
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
                <Header history={this.props.history} />
                <div className="movie-list__movie-filter">
                    <TextField
                        hintText="For example: Fight Club..."
                        floatingLabelText="Search"
                        onChange={this.handleSearch}
                        value={this.state.search} />
                    <select value={this.state.sortOrder} onChange={this.handleSelect}>
                        <option value="title: A-Z">title: A-Z</option>
                        <option value="title: Z-A">title: Z-A</option>
                        <option value="year: newest first">year: newest first</option>
                        <option value="year: oldest first">year: oldest first</option>
                    </select>
                </div>
                <div>{this.filterMovies()}</div>
            </div >
        );
    }
}

export default MoviesList;
