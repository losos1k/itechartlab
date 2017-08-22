import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton';

class Logout extends Component {
    logout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('password');
        localStorage.removeItem('isLogin');
        this.props.history.push(`/`)
    }

    render() {

        return (
            <FlatButton label="Logout" primary={true} onClick={this.logout} />
        );
    }
}

export default Logout;
