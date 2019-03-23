import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
    formatCard(user) {
        const score = 0
        const nAnswers = Object.keys(user.answers).length
        const nQuestions = user.questions.length

        return (
            <div key={user.id}>
                <h2>{user.name}</h2>
                <div>thumbnail</div>
                <div><span>Answered question</span><h3>{nAnswers}</h3></div>
                <div><span>Created questions</span><h3>{nQuestions}</h3></div>
                <div>
                    <div>Score</div>
                    <div>{nAnswers + nQuestions}</div>
                </div>
            </div>
        )
    }
    render() {
        var { users } = this.props
        return Object.keys(users).map(p => this.formatCard(users[p]))
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard)