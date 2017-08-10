import { connect } from 'react-redux'
import Login from '../components/Login/Login'

const mapStateToProps = (store) => {
    return {
        login: userReducer(store.user),
        // password: state.user.password,
    }
}

const VisibleTodoList  = connect(
  mapStateToProps
)(Login)

export default VisibleTodoList;
