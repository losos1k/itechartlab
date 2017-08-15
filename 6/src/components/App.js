import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import '../App.css'

import Login from '../components/Login/index'
import MoviesList from '../components/MoviesList/index'

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div className="App">
          <Provider store={store}>
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
