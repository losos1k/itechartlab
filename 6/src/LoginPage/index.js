import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLoginAction } from './getLoginAction'
import { BrowserRouter, withRouter } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';

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
      dialogOpen: false,
    };
  }

  componentDidMount() {
    if (this.getIsLoginValue()) {
      this.setUser();
    }
  }

  setLoginValue = () => {
    return localStorage.setItem('login', this.state.login);
  }

  setPasswordValue = () => {
    return localStorage.setItem('password', this.state.password);
  }

  getLoginValue = () => {
    return localStorage.getItem('login');
  }

  getPasswordValue = () => {
    return localStorage.getItem('password');
  }

  setIsLoginValue = () => {
    return localStorage.setItem('isLogin', true);
  }

  getIsLoginValue = () => {
    return localStorage.getItem('isLogin');
  }

  handleLogin = (e) => {
    this.setState({ login: e.target.value });
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  handleOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };

  handleSubmit = (e) => {
    if (!this.getIsLoginValue() && (this.state.login.length > 3) && (this.state.password.length > 3)) {
      this.setLoginValue();
      this.setPasswordValue();
      this.setUser();
    } else {
      this.setState({
        dialogOpen: true,
        message: 'Your login or password is too short!'
      });
    }
  }

  setUser = () => {
    this.props.getLoginAction(this.getLoginValue(), this.getPasswordValue());
    this.setIsLoginValue();
    this.pushToNextPage();
  }

  pushToNextPage = () => {
    this.props.history.push(`/movies`)
  }

  render() {
    let errorLoginMessage = this.state.message;

    return (
      <BrowserRouter history={history}>
        <div className="login-form-wrapper">
          <Paper zDepth={1} className="login-form">
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
                open={this.state.dialogOpen}
                onRequestClose={this.handleClose}
              >
                {errorLoginMessage}
              </Dialog>}
          </Paper>
        </div>
      </BrowserRouter >
    );
  }
}
