import React, { Component } from 'react'
import { connect } from 'react-redux'

class Card extends Component {
    render() {
        const { user, title } = this.props
        
        return (
            <div>
                <h3>{user.name} - {title}</h3>
                <div>thumbnail</div>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps({ users, questions }, { uid, qid, title }) {
    const question = qid ? questions[qid] : null
    const user = question? users[question.author] : users[uid]
    /*user.nQuestions = user.questions.length
    user.nAnswers = Object.keys(user.answers).length
    
    if (question)
        question.nAnswers = {
            nA: question.optionOne.votes.length,
            nB: question.optionTwo.votes.length
        }*/

    return {
        user,
        question,
        title
    }
}

export default connect(mapStateToProps)(Card)