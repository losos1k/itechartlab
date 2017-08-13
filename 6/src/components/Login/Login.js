import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginInput from '../Login/LoginInput'
import PasswordInput from '../Login/PasswordInput'
import SubmitButton from '../Login/SubmitButton'

@connect((store) => {
  return {
    login: store.user.login,
    password: store.user.password,
  };
})
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: ''
    };
  }

  setData(login) {
    this.setState({login});
    console.log(this.state)
  }

  render() {
    console.log(LoginInput.value)
    return (
      <div className="Login">
        <LoginInput setData={this.setData.bind(this)} login={this.props.login} /><br />
        <PasswordInput /><br />
        <SubmitButton /><br />
      </div>
    );
  }
}
