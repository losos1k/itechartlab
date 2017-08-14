import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../reducers/reducers'

import '../App.css'

import Login from '../components/Login/index'

const store = createStore(reducers);

store.subscribe(() => {
  store.getState();
})

class App extends Component {
  handleData = (userData) => {
    console.log(store.dispatch({ type: 'CHANGE_LOGIN', loginValue: userData.login, passwordValue: userData.password }));
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Login onHandleData={this.handleData} />
        </Provider>
      </div>
    );
  }
}

export default App;
