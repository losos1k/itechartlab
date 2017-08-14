import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'

import '../App.css'

import Login from '../components/Login/index'

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
