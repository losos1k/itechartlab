import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux'
import { logout } from '../../LoginPage/userActions'

const mapDispatchToProps = () => {
    return dispatch => ({
        logout: () => {
            return dispatch(logout())
        },
    })
}

@connect(null, mapDispatchToProps)
class Logout extends Component {
    logout = () => {
        this.props.logout();
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
