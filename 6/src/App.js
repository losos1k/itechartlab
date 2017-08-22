import React, { Component } from 'react'
import { connect } from 'react-redux';
import storeCreate from './storeCreate'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { getMovies } from './MovieListPage/getMovies';

import Login from './LoginPage/index'
import MoviesList from './MovieListPage/index'
import MovieInfo from './MoviePage/index'

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
      <MuiThemeProvider>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/movies" component={MoviesList} />
            <Route path="/movie/:id" component={MovieInfo} />
          </Switch>
        </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
