import React, { Component } from 'react'
import { Provider } from 'react-redux'

import '../App.css'

import Login from '../components/Login/Login'

import store from '../reducers/store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Login />
        </Provider>
      </div>
    );
  }
}

export default App;
