import React from 'react'
import TodoList from './to-do-list/TodoList'
import Login from './login/Login'
import { connect } from 'react-redux'

// This component is used to show the landing page depending if logged in or not
// This will later be refactored, but used just as a stand in right now
const LandingPage = (props) => {
  return (
    <div>

        {/* if loggedx in, show the todolist, if not show the login page */}
        {props.logIn ? <TodoList /> : <Login/>}
    </div>
  )
}





const mapStateToProps = (state) => {
    return { logIn: state.login.loggedIn }
}

export default connect(mapStateToProps)(LandingPage);
