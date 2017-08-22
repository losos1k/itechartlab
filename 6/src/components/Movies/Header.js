import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Breadcrumb } from 'react-bootstrap';

import Logout from './Logout';

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
                <Logout history={this.props.history}/>
            </header>
        );
    }
}

export default Header;
