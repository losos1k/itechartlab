import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLogin } from '../../actions/getLogin'
// import { pushToNextPage } from '../../actions/pushToNextPage'
import { BrowserRouter, withRouter } from 'react-router-dom'
import { FormGroup } from 'react-bootstrap';

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
      return <div>Your login or password is too short!</div>;
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
    
    return (
      <BrowserRouter history={history}>
        <FormGroup controlId="formValidationSuccess2" validationState="success">
          <input type="text" placeholder="Login" className="dataInput" value={this.state.value} onChange={this.handleLogin} />
          <input type="password" placeholder="Password" className="dataInput" value={this.state.value} onChange={this.handlePassword} />
          <input type="Submit" defaultValue="Submit" onClick={this.handleSubmit} />
        </FormGroup>
      </BrowserRouter>
    );
  }
}
