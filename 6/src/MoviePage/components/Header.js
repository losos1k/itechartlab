import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logout from './Logout';

const mapStateToProps = (store) => {
    return {
        login: store.user.login,
        movies: store.movies.movies,
    };
}
@connect(mapStateToProps)
class Header extends Component {
    constructor(props) {
        super();

        this.state = {
            page: props.page,
            breadCrump: null
        }
    }

    pushToMoviesListPage = () => {
        this.props.history.push(`/movies`)
    }

    componentWillMount() {
        if (this.state.page === "Movie List") {
            this.setState({
                breadCrump:
                <Breadcrumb>
                    <Breadcrumb.Item active>
                        {this.state.page}
                    </Breadcrumb.Item>
                </Breadcrumb>
            })
        } else if (this.state.page === "Movie") {
            this.setState({
                breadCrump:
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <span onClick={this.pushToMoviesListPage}>Movie List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        {this.props.movieInfo.title}
                    </Breadcrumb.Item>
                </Breadcrumb>
            })
        }
    }

    render() {

        return (
            <header>
                {this.state.breadCrump}
                <div>
                    <p>You logged in as <b>{this.props.login}</b></p>
                    <Logout history={this.props.history} />
                </div>
            </header>
        );
    }
}

export default Header;
