import React, { Component } from 'react'
import { connect } from 'react-redux';
import storeCreate from '../storeCreate'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as actionTypes from '../reducers/actionTypes';

import { fetchMoviesData } from '../actions/fetchMoviesData';

import Login from '../components/Login/index'
import MoviesList from '../components/MoviesList/index'
import MovieInfo from '../components/Movies/index'

const mapStateToProps = (store) => {
  return {
    movies: store.movies.movies
  };
}

@connect(mapStateToProps, fetchMoviesData)
class App extends Component {
  constructor() {
    super();

    this.store = storeCreate();
  }

  fetchDataHandler = () => {
    this.props.getMovies(actionTypes.FETCH_MOVIES);
  }

  render() {
    return (
      <BrowserRouter history={history}>
        <div className="App" {...window.onload = this.fetchDataHandler}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/movies" component={MoviesList} />
            <Route path="/movie/:id" component={MovieInfo} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
