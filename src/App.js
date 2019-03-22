import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import { handleInitialData } from './action/shared'
import Login from './component/login'
import AddQuestion from './component/addQuestion'
import Answer from './component/answer'
import History from './component/history'
import LogoutPage from './component/logout'
import {PrivateRoute} from './component/privateRoute'
import Nav from './component/nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const {authedUser} =this.props
    console.log('App',authedUser)
    return (
      <div>
        <Router>
          <Nav />
          <Route path="/login" component={Login} />
          <Fragment>
            <PrivateRoute path="/answer" component={Answer} authed={authedUser}/>
            <PrivateRoute path="/add" component={AddQuestion} authed={authedUser} />
            <PrivateRoute path="/history" component={History} authed={authedUser} />
            <PrivateRoute path="/logout" component={LogoutPage} authed={authedUser} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
