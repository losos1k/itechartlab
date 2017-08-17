import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginDispatcher } from '../../actions/loginDispatcher'
// import { pushToNextPage } from '../../actions/pushToNextPage'
import * as actionTypes from '../../reducers/actionTypes'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = () => {
  return dispatch => ({
    setLogin: (actionType, loginVal, passwordVal) => {
      dispatch(loginDispatcher(actionType, loginVal, passwordVal))
    }
  })
}

const mapStateToProps = (store) => {
  return {
    login: store.user.login,
    password: store.user.password,
  };
}

@connect(mapStateToProps, mapDispatchToProps)
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
    this.props.setLogin(actionTypes.CHANGE_LOGIN, this.state.login, this.state.password);
    this.pushToNextPage();
  }

  pushToNextPage = () => {
    this.props.history.push(`/movies`)
  }

  render() {
    return (
      <div className="Login">
        <input placeholder="Login" className="dataInput" value={this.state.value} onChange={this.handleLogin} />
        <input placeholder="Password" className="dataInput" value={this.state.value} onChange={this.handlePassword} />
        <input type="Submit" defaultValue="Submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}
