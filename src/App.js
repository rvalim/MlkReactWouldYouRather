import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import PrivateRoute from './component/privateRoute'
import { handleInitialData } from './action/shared'
import Login from './component/login'
import AddQuestion from './component/addQuestion'
import Answer from './component/answer'
import History from './component/history'
import LogoutPage from './component/logout'
import Leaderboard from './component/leaderboard'
import Nav from './component/nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  formatTitle() {
    const {authedUser, user} = this.props
    return authedUser? <h1>Hello {user.name}!</h1> : <h1>Hello human!</h1>
  }

  render() {
    const {authedUser} =this.props
    return (
      <div>
        {this.formatTitle()}
        <Router>
          <Nav />
          <Route path="/login" component={Login} />
          <Fragment>
            <PrivateRoute path="/answer" component={Answer}/>
            <PrivateRoute path="/add" component={AddQuestion} />
            <PrivateRoute path="/history" component={History} />
            <PrivateRoute path="/logout" component={LogoutPage} />
            <PrivateRoute path="/leaderboard" component={Leaderboard} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(App);
