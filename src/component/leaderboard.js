import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './card'

class LeaderBoard extends Component {
    formatCard(user) {
        return (
            <Card key={user.id} uid={user.id} title=''>
                <div>
                    <div>Created questions: {user.nQuestions}</div>
                    <div>Answered questions: {user.nAnswers}</div>
                    <div>Score: {user.score}</div>
                </div>
            </Card>
        )
    }

    render() {
        var { users } = this.props
        return Object.keys(users).map(p => this.formatCard(users[p]))
    }
}

function mapStateToProps({ authedUser, users }) {
    const aux = Object.keys(users).map(p => {
        const user = users[p]
        const nAnswers = Object.keys(user.answers).length
        const nQuestions = user.questions.length

        return {
            ...user,
            nAnswers,
            nQuestions,
            score: nAnswers + nQuestions
        }
    }).sort((a, b) => b.score - a.score)

    return {
        authedUser,
        users: aux
    }
}

export default connect(mapStateToProps)(LeaderBoard)