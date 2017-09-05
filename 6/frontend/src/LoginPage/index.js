import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userActions } from './userActions'
import { BrowserRouter, withRouter } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import * as userLocalStorage from '../services/userLocalStorage';
import FlatButton from 'material-ui/FlatButton';

import './index.css';

const mapStateToProps = (store) => {
  return {
    login: store.user.login,
    id: store.user.id,
  };
}

const mapDispatchToProps = () => {
  return dispatch => ({
    userActions: (loginVal, passwordVal, loginType) => {
      return dispatch(userActions(loginVal, passwordVal, loginType))
    },
  })
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
      isRegistrationPage: false,
      isLoginPage: true,
      loginType: 'login'
    };
  }

  componentDidMount() {
    if (userLocalStorage.getIsLoginValue()) {
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
    this.setState({ dialogOpen: true });
  };

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };

  handleMoveToLoginPage = () => {
    this.setState({
      isRegistrationPage: false,
      isLoginPage: true,
      loginType: 'login'
    })
  }

  handleMoveToRegistrationPage = () => {
    this.setState({
      isRegistrationPage: true,
      isLoginPage: false,
      loginType: 'register'
    })
  }

  handleSubmit = (e) => {
    if (!userLocalStorage.getIsLoginValue() && (this.state.login.length > 3) && (this.state.password.length > 3)) {
      userLocalStorage.setLoginValue(this.state.login);
      userLocalStorage.setPasswordValue(this.state.password);
      this.setUser();
    } else {
      this.setState({
        dialogOpen: true,
        message: 'Your login or password is too short!'
      });
    }
  }

  setUser = () => {
    this.props.userActions(userLocalStorage.getLoginValue(), userLocalStorage.getPasswordValue(), this.state.loginType)
      .then(() => {
        userLocalStorage.setIsLoginValue();
        this.pushToNextPage();
      })
      .catch((err) => {
        this.setState({
          dialogOpen: true,
          message: 'Invalid login or password'
        });
      });
  }

  pushToNextPage = () => {
    this.props.history.push(`/movies`)
  }

  render() {
    let errorLoginMessage = this.state.message;
    let isRegistrationPage = this.state.isRegistrationPage;
    let isLoginPage = this.state.isLoginPage;

    return (
      <BrowserRouter history={history}>
        <div>
          {isRegistrationPage &&
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
                <TextField
                  hintText="Type your password here"
                  type="password"
                  floatingLabelText="Confirm password"
                  onChange={this.handlePassword} /><br />
                <RaisedButton label="Submit" primary={true} onClick={this.handleSubmit} />
                <FlatButton label="Log In"
                  primary={true}
                  onClick={this.handleMoveToLoginPage} />
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
          }
          {isLoginPage &&
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
                <FlatButton label="Register"
                  primary={true}
                  onClick={this.handleMoveToRegistrationPage} />
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
          }
        </div>
      </BrowserRouter >
    );
  }
}
