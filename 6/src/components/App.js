import React, { Component } from 'react'
import { Provider } from 'react-redux'
import storeCreate from '../storeCreate'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Login from '../components/Login/index'
import MoviesList from '../components/MoviesList/index'

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
            <div>
              <Login />
              <Route exact path="/movies_list" component={MoviesList} />
            </div>
          </Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
