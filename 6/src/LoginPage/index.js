import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLoginAction } from './getLoginAction'
import { BrowserRouter, withRouter } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import './index.css';

const mapDispatchToProps = () => {
  return dispatch => ({
    getLoginAction: (loginVal, passwordVal) => {
      dispatch(getLoginAction(loginVal, passwordVal))
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
      message: null,
      open: false,
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

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (e) => {
    if (!localStorage.getItem('isLogin') && (this.state.login.length > 3) && (this.state.password.length > 3)) {
      localStorage.setItem('login', this.state.login);
      localStorage.setItem('password', this.state.password);
      this.setUser();
    } else {
      this.setState({
        open: true,
        message: 'Your login or password is too short!'
      });
    }
  }

  setUser = () => {
    this.props.getLoginAction(localStorage.getItem('login'), localStorage.getItem('password'));
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
              type="password"
              floatingLabelText="Password"
              onChange={this.handlePassword} /><br />
            <RaisedButton label="Submit" primary={true} onClick={this.handleSubmit} />
            {errorLoginMessage &&
              <Dialog
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
              >
                {errorLoginMessage}
              </Dialog>}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
