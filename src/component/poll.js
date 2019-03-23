import React from 'react'
import { connect } from 'react-redux'

class Poll extends React.Component {
	handleDetails(qid) {
        this.props.history.push(`/question/${qid}`)
	}

	formatPoll(question) {
		const { id } = question
		const optionOne = question.optionOne.text

		return (
			<div key={id}>
				<h3>Would you rather</h3>
                <div><strong>...{optionOne}...</strong></div>
				<button onClick={() => this.handleDetails(id)}>
					<strong>View Poll</strong>
				</button>
			</div>
		)
	}

	render() {
		const { questions } = this.props
		const keys = Object.keys(questions)

		return (
			<div>
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

export default connect(mapStateToProps)(Poll)