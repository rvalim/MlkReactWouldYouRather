import React from 'react'
import { connect } from 'react-redux'

const principal = {
    width: '100%'
}

const first = {
    width: '48%'
    , float: 'left'
    , border: '1px solid black'
}
const second = {
    width: '48%'
    , float: 'right'
    , border: '1px solid red'
}
const choosen = {
    color: 'red'
}

class AnswerList extends React.Component {
    getQuestion(id) {
        return this.props.options.find(p => p.id === id)
    }

    formatQuestion(question, option) {
        return( 
            <div style={principal} key={question.id}>
                 <div style={first}>
                     <strong style={option === "optionOne" ? choosen : undefined}>
                         {question.optionOne.text}
                     </strong>
                 </div>
                 <div style={second}>
                     <strong style={option === "optionTwo" ? choosen : undefined}>
                         {question.optionTwo.text}
                     </strong>
                 </div>
             </div>
        )
    }

    listAllAnswers() {
        const {answers, questions} = this.props
        const keys = Object.keys(answers)

        return (
            <div>
                {keys.map(p => this.formatQuestion(questions[p], answers[p]))}
            </div>
        )

    }

    render() {
        return (
            <div>
                {this.listAllAnswers(this.props.list)}
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users , questions }){
    const aux = users[authedUser].answers
    
    return {
        answers: aux, 
        questions
    }
}

export default connect(mapStateToProps)(AnswerList)