import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLogin } from '../../actions/getLogin'
import { BrowserRouter, withRouter } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './index.css';

const mapDispatchToProps = () => {
  return dispatch => ({
    getLogin: (loginVal, passwordVal) => {
      dispatch(getLogin(loginVal, passwordVal))
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
      message: null
    };
  }

  componentDidMount() {
    if (localStorage.getItem('isLogin')) {
      this.setUser();
    }
  }

  handleLogin = (e) => {
    this.setState({ login: e.target.value });
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = (e) => {
    if (!localStorage.getItem('isLogin') && (this.state.login.length > 3) && (this.state.password.length > 3)) {
      localStorage.setItem('login', this.state.login);
      localStorage.setItem('password', this.state.password);
      this.setUser();
    } else {
      this.setState({
        message: 'Your login or password is too short!'
      });
    }
  }

  setUser = () => {
    this.props.getLogin(localStorage.getItem('login'), localStorage.getItem('password'));
    localStorage.setItem('isLogin', true)
    this.pushToNextPage();
  }

  pushToNextPage = () => {
    this.props.history.push(`/movies`)
  }

  render() {
    let errorLoginMessage = this.state.message;

    return (
      <BrowserRouter history={history}>
        <div>
          <div className="login-form">
            <TextField
              hintText="Type your login here"
              floatingLabelText="Login"
              onChange={this.handleLogin} /><br />
            <TextField
              hintText="Type your password here"
              floatingLabelText="Password"
              onChange={this.handlePassword} /><br />
            <RaisedButton label="Submit" primary={true} onClick={this.handleSubmit} />
            {errorLoginMessage && <div className="error__login-message">{errorLoginMessage}</div>}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
