import React, { Component } from 'react'
import '../App.css'

import LoginInput from '../components/LoginInput'
import PasswordInput from '../components/PasswordInput'
import SubmitButton from '../components/SubmitButton'

import store from '../reducers/store';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <LoginInput /><br />
        <PasswordInput /><br />
        <SubmitButton /><br />
      </div>
    );
  }
}

export default Login;
