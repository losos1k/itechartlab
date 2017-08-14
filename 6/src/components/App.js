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

store.dispatch({ type: 'CHANGE_LOGIN', loginValue: 'log', passwordValue: 'pass' });

class App extends Component {
  handleData = (loginVal) => {
    this.setState({ user: loginVal });
    console.log(this.state.user)
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
