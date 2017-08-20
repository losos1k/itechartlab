import React, { Component } from 'react'
import { connect } from 'react-redux';
import storeCreate from '../storeCreate'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { getMovies } from '../actions/getMovies';

import Login from '../components/Login/index'
import MoviesList from '../components/MoviesList/index'
import MovieInfo from '../components/Movies/index'

const mapStateToProps = (store) => {
  return {
    movies: store.movies.movies
  };
}

const mapDispatchToProps = () => {
  return dispatch => ({
    getMovies: () => dispatch(getMovies())
  })
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  constructor() {
    super();

    this.store = storeCreate();
  }

  componentWillMount () {
    this.props.getMovies();
  }

  render() {
    return (
      <BrowserRouter history={history}>
        <div className="App">
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
