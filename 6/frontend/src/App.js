import React, { Component } from 'react'
import storeCreate from './storeCreate'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Login from './LoginPage/index'
import MoviesList from './MovieListPage/index'
import MovieInfo from './MoviePage/index'

class App extends Component {
  // constructor() {
  //   super();

  //   this.store = storeCreate();
  // }

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
