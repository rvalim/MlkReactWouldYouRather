import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from './action/shared'
import Nav from './component/nav'
import PrivateRoute from './component/privateRoute'
import Home from './component/home'
import Question from './component/question'
import QuestionAdd from './component/questionAdd'
import Leaderboard from './component/leaderboard'
import Login from './component/login'
import LogoutPage from './component/logout'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


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
            <PrivateRoute path="/" exact component={Home} />
            <PrivateRoute path="/question/:id" component={Question}/>
            <PrivateRoute path="/add" component={QuestionAdd} />
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
