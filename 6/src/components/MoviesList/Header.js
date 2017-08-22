import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logout from '../Movies/Logout';

const mapStateToProps = (store) => {
    return {
        login: store.user.login,
    };
}

@connect(mapStateToProps)
class MoviesList extends Component {

    render() {
        return (
            <header>
                <h3>Movie List</h3>
                <p>{this.props.login}</p>
                <Logout history={this.props.history} />
            </header>
        );
    }
}

export default MoviesList;
