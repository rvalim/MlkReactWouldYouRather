import React from 'react'
import * as action from '../action/answers'
import { connect } from 'react-redux'

class Answer extends React.Component {

	constructor(props) {
		super(props)

		this.handleAnswer = this.handleAnswer.bind(this)
	}

	formatQuestion(question) {
		const { id } = question
		const optionOne = question.optionOne.text
		const optionTwo = question.optionTwo.text

		return (
			<div key={id}>
				<h3>Would you rather</h3>
				<button onClick={() => this.handleAnswer(id, optionOne)}>
					<strong>{optionOne}</strong>
				</button>
				<h4>OR</h4>
				<button onClick={() => this.handleAnswer(id, optionTwo)}>
					<strong>{optionTwo}</strong>
				</button>
			</div>
		)
	}

	handleAnswer(questionId, answer) {
		this.props.dispatch(action.chooseOne(questionId, answer))
	}

	render() {
		const { questions } = this.props
		const keys = Object.keys(questions)

		return (
			<div>
				{keys.map(p => this.formatQuestion(questions[p]))}
			</div>
		)
	}
}

function mapStateToProps({ questions }) {
	return {
		questions
	}
}

export default connect(mapStateToProps)(Answer)