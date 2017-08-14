import React, { Component } from 'react'
import { connect } from 'react-redux'

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
      login: '',
      password: ''
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
    var userData = this.state;
    this.props.onHandleData(userData);
    console.log('success!');   
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
