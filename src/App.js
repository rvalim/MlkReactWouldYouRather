import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import PrivateRoute from './component/privateRoute'
import { handleInitialData } from './action/shared'
import Login from './component/login'
import Question from './component/question'
import QuestionAdd from './component/questionAdd'
import QuestionPoll from './component/questionPoll'
import QuestionHistory from './component/questionHistory'
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
    return (
      <div>
        {this.formatTitle()}
        <Router>
          <Nav />
          <Route path="/login" component={Login} />
          <Fragment>
            <PrivateRoute path="/question/:id" component={Question}/>
            <PrivateRoute path="/poll" component={QuestionPoll}/>
            <PrivateRoute path="/add" component={QuestionAdd} />
            <PrivateRoute path="/history" component={QuestionHistory} />
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
