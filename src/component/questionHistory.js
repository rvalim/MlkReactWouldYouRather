import React from 'react'
import { connect } from 'react-redux'
import Card from './card'
import {Alert, Button} from 'react-bootstrap'
import { formatStatisticsResult } from '../utils/helper'

class questionHistory extends React.Component {
	handleDetails(qid) {
		this.props.history.push(`/question/${qid}`)
    }
    
    getQuestion(id) {
        return this.props.options.find(p => p.id === id)
    }

    formatQuestion(question, option) {
        const sA = question.optionOne.text
        const sB = question.optionTwo.text
        const nA = question.optionOne.votes.length
        const nB = question.optionTwo.votes.length
        const total = nA + nB
        
        return( 
            <Card key={question.id} uid={question.author} title='Asked by' >
                <Alert variant='primary'>
                    <h2>You rather {option === 'optionOne'? sA : sB }</h2>
                </Alert>
                {formatStatisticsResult(sA, nA, total) }
                {formatStatisticsResult(sB, nB, total) }
                <Button onClick={() => this.handleDetails(question.id)}>
					<strong>View Poll</strong>
				</Button>
             </Card>
        )
    }

    listAllAnswers() {
        const {answers, questions} = this.props

        return (
            <div>
                {questions.map(q => this.formatQuestion(q, answers[q.id]))}
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