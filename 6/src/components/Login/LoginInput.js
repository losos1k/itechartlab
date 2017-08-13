import React, { Component } from 'react'

class LoginInput extends Component {
    handleChange(e) {
        const loginVal = e.target.value;
        this.props.setData(loginVal);
    }

    render() {
        return (
            <input placeholder="Login" value={this.props.loginVal} onFocus={this.handleChange.bind(this)} />
        );
    }
}

export default LoginInput;
