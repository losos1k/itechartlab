import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginInput from '../Login/LoginInput'
import PasswordInput from '../Login/PasswordInput'
import SubmitButton from '../Login/SubmitButton'

class Login extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="Login">
        <LoginInput /><br />
        <PasswordInput /><br />
        <SubmitButton /><br />
      </div>
    );
  }
}

export default Login;
