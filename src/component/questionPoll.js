import React from 'react'
import { connect } from 'react-redux'
import Card from './card'
import {Button, Alert} from 'react-bootstrap'

class QuestionPoll extends React.Component {
	handleDetails(qid) {
console.log(this.props.history)
		this.props.history.push(`/question/${qid}`)
	}

	formatPoll(question) {
		const { id } = question
		const optionOne = question.optionOne.text

		return (
			<Card key={id} qid={id} title='Asked by'>
                <div><strong>...{optionOne}...</strong></div>
				<Button onClick={() => this.handleDetails(id)}>
					<strong>View Poll</strong>
				</Button>
			</Card>
		)
	}

	render() {
		const { questions } = this.props
		const keys = Object.keys(questions)

		return (
			<div>
				{keys.length === 0 && <Alert variant='info'><strong>There is no poll available</strong></Alert>}
				{keys.map(p => this.formatPoll(questions[p]))}
			</div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }) {
	const user = users[authedUser]
	const filtered = Object.keys(questions)
		.map(p => user.answers[p] === undefined ? questions[p] : undefined)
		.filter(p => p !== undefined)
		.sort((a,b) => b.timestamp - a.timestamp)

	return {
		questions : filtered
	}
}

export default connect(mapStateToProps)(QuestionPoll)