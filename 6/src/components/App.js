import React, { Component } from 'react'
import { Provider } from 'react-redux'
import storeCreate from '../storeCreate'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../components/Login/index'
import MoviesList from '../components/MoviesList/index'
import MovieInfo from '../components/Movies/index'

class App extends Component {
  constructor() {
    super();

    this.store = storeCreate();
  }

  render() {
    return (
      <BrowserRouter history={history}>
        <div className="App">
          <Provider store={storeCreate()}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/movies_list" component={MoviesList} />
              <Route path="/movie" component={MovieInfo} />
            </Switch>
          </Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
