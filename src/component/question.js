import React from 'react'
import * as action from '../action/users'
import { connect } from 'react-redux'

class question extends React.Component {
	handlequestion(questionId, question) {
		const {dispatch, history} = this.props

		dispatch(action.answerQuestion(questionId, question))
        history.push(`/poll`)
	}

	formatQuestion(question) {
		const { id } = question
		const optionOne = question.optionOne.text
		const optionTwo = question.optionTwo.text

		return (
			<div key={id}>
				<h3>Would you rather</h3>
				<button onClick={() => this.handlequestion(id, optionOne)}>
					<strong>{optionOne}</strong>
				</button>
				<h4>OR</h4>
				<button onClick={() => this.handlequestion(id, optionTwo)}>
					<strong>{optionTwo}</strong>
				</button>
			</div>
		)
	}

	render() {
		const { question } = this.props

		return (
			<div>
				{this.formatQuestion(question)}
			</div>
		)
	}
}

function mapStateToProps({ questions }, props) {
	const {id} = props.match.params

	return {
		question: questions[id]
	}
}

export default connect(mapStateToProps)(question)