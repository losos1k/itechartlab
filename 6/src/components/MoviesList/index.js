import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import { getMovies } from '../../actions/getMovies';
import _ from 'lodash';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import MovieInfo from '../Movies/index';

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
            moviesListToDisplay: null,
        };
    }

    static defaultProps = {
        movies: [],
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({
            moviesListToDisplay: this.props.movies.slice(0, this.state.loadMoviesAmount).map(movie => {
                return <div key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                        <Paper zDepth={1} className='movie-list__movie'>
                            <div><img src={movie.images[0]} /></div>
                            <section className="movie-list__movie-description">
                                <h2>{movie.title}</h2>
                                <p>{movie.description}</p>
                                <p><b>Year: {movie.year}</b></p>
                            </section>
                        </Paper>
                    </Link>
                </div>
            })
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({ loadMoviesAmount: 20 })
    }

    handleSearch = (e) => {
        this.setState({ search: e.target.value })
    }

    handleSelect = (e) => {
        this.setState({ sortOrder: e.target.value })
    }

    logout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('password');
        localStorage.removeItem('isLogin');
        this.props.history.push(`/`)
    }

    getMovies = (moviesLoadAmount) => {
        const moviesList = this.props.movies.filter(movie => {
            return movie.title.toLowerCase().indexOf(
                this.state.search.toLowerCase()) !== -1;
        });
        let sortedList = '';
        switch (this.state.sortOrder) {
            case 'title: A-Z':
                sortedList = _.orderBy(moviesList, 'title', 'asc');
                break;

            case 'title: Z-A':
                sortedList = _.orderBy(moviesList, 'title', 'desc');
                break;

            case 'year: oldest first':
                sortedList = _.orderBy(moviesList, 'year', 'asc');
                break;

            case 'year: newest first':
                sortedList = _.orderBy(moviesList, 'year', 'desc');
                break;
        }
        return sortedList.slice(0, moviesLoadAmount).map(movie => {
            return <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                    <Paper zDepth={1} className='movie-list__movie'>
                        <div><img src={movie.images[0]} /></div>
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
        var movies = this.getMovies(10);
        return (
            <div >
                <header>
                    <h3>Movie List</h3>
                    <p>{this.props.login}</p>
                    <FlatButton label="Logout" primary={true} onClick={this.logout} />
                </header>
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
                    {/* <DropDownMenu value={this.state.sortOrder} onChange={this.handleSelect}>
                        <MenuItem value="title: A-Z" primaryText="title: A-Z" />
                        <MenuItem value="title: Z-A" primaryText="title: Z-A" />
                        <MenuItem value="year: newest first" primaryText="year: newest first" />
                        <MenuItem value="year: oldest first" primaryText="year: oldest first" />
                    </DropDownMenu> */}
                </div>
                <div>{movies}</div>
            </div >
        );
    }
}

export default MoviesList;
