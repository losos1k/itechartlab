import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CHANGE_LOGIN, loginDispatcher } from '../../reducers/actions'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

@connect((store) => {
  return {
    login: store.user.login,
    password: store.user.password,
  };
}, loginDispatcher)
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
      redirect: false
    };
  }

  handleLogin = (e) => {
    const loginVal = e.target.value;
    this.setState({ login: loginVal });
  }

  handlePassword = (e) => {
    const passwordVal = e.target.value;
    this.setState({ password: passwordVal });
  }

  handleSubmit = (e) => {
    this.setState({ redirect: true });
    this.props.setLogin(CHANGE_LOGIN, this.state.login, this.state.password);
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to="movies_list" />;
    }
    return (
      <BrowserRouter history={history}>
        <div className="Login">
          <input placeholder="Login" className="dataInput" value={this.state.value} onChange={this.handleLogin} />
          <input placeholder="Password" className="dataInput" value={this.state.value} onChange={this.handlePassword} />
          <input type="Submit" defaultValue="Submit" onClick={this.handleSubmit} />
        </div>
      </BrowserRouter>
    );
  }
}
