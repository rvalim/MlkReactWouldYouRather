import React from 'react'
import { connect } from 'react-redux'
import Card from './card'

const first = {
    border: '1px solid black'
}
const second = {
    border: '1px solid red'
}
const choosen = {
    color: 'red'
}

class questionHistory extends React.Component {
    getQuestion(id) {
        return this.props.options.find(p => p.id === id)
    }

    formatQuestion(question, option) {
        return( 
            <Card key={question.id} qid={question.id} >
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
             </Card>
        )
    }

    listAllAnswers() {
        const {answers, questions} = this.props
        const keys = Object.keys(questions)

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
	const filtered = Object.keys(aux)
        .map(p => questions[p])
        .sort((a,b) => b.timestamp - a.timestamp)

    return {
        answers: aux, 
        questions: filtered
    }
}

export default connect(mapStateToProps)(questionHistory)