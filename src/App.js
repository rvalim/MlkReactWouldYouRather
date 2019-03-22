import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import { handleInitialData } from './action/shared'
import Login from './component/login'
import AddQuestion from './component/addQuestion'
import Answer from './component/answer'
import Answers from './component/answereds'
import Nav from './component/nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <span>{this.props.loading}</span>
        <Router>
          <Nav />
              <Route path="/login" component={Login} />
          {this.props.loading === true
              ? <Redirect to='/login' />
              : 
                <Fragment>
                  <Route path="/" exact component={Answer} />
                  <Route path="/add" component={AddQuestion} />
                  <Route path="/history" component={Answers} />
                  <Route path="/leaderboard" component={Answers} />
                </Fragment>
              }
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    //loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
