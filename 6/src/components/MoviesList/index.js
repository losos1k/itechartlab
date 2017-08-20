import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { getMovies } from '../../actions/getMovies';
import _ from 'lodash';

import MovieInfo from '../Movies/index';

import './index.css';

const mapStateToProps = (store) => {
    return {
        movies: store.movies.movies,
    };
}

@connect(mapStateToProps)
class MoviesList extends Component {
    constructor() {
        super();

        this.state = {
            search: '',
            sortOrder: 'title: A-Z',
        };
    }

    static defaultProps = {
        movies: []
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        this.setState({ items: this.props.movies })
    }

    getDistFromBottom = () => {
        var scrollPosition = window.pageYOffset;
        var windowSize = window.innerHeight;
        var bodyHeight = document.body.offsetHeight;
        return Math.max(bodyHeight - (scrollPosition + windowSize), 0);
    }

    handleScroll = () => {
        if (this.getDistFromBottom() < 300) {
            console.log('kek', this.getMovies());
            this.getMovies();
        }
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
    }

    getMovies = () => {
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
        return sortedList.map(movie => {
            return <p key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                    {movie.id + ' '}
                    <img src={movie.images[0]} />
                    {movie.title}</Link>
            </p>
        })
    }

    render() {
        return (
            <div>
                <nav>
                    <h1 onClick={this.logout}><Link to='/'>Logout</Link></h1>
                </nav>
                <div>
                    <input type="text" placeholder="search" onChange={this.handleSearch} value={this.state.search} />
                    <select value={this.state.sortOrder} onChange={this.handleSelect}>
                        <option value="title: A-Z">title: A-Z</option>
                        <option value="title: Z-A">title: Z-A</option>
                        <option value="year: oldest first">year: oldest first</option>
                        <option value="year: newest first">year: newest first</option>
                    </select>
                </div>
                <div>{this.getMovies()}</div>
            </div>
        );
    }
}

export default MoviesList;
