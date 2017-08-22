import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';

const mapStateToProps = (store) => {
    return {
        login: store.user.login,
        movies: store.movies.movies,
    };
}
@connect(mapStateToProps)
class Header extends Component {
    logout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('password');
        localStorage.removeItem('isLogin');
        this.props.history.push(`/`)
    }

    render() {

        return (
            <header>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        Movie List
                        </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        {this.props.movieInfo.title}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <p>{this.props.login}</p>
                <FlatButton label="Logout" primary={true} onClick={this.logout} />
            </header>
        );
    }
}

export default Header;
