import React from 'react'
import * as action from '../action/answer'
import { connect } from 'react-redux'

class Answer extends React.Component {

	constructor(props) {
		super(props)

		this.handleAnswer = this.handleAnswer.bind(this)
	}

	handleAnswer(questionId, option) {
		this.props.dispatch(action.chooseOne(questionId, option))
	}

	render() {
		return (
			<div>
				{this.props.questions.map(p =>
					<div key={p.id}>
						<h3>Would you rather</h3>
						<button onClick={() => this.handleAnswer(p.id, 'a')}>
							<strong>{p.optionOne.text}</strong>
						</button>
						<h4>OR</h4>
						<button onClick={() => this.handleAnswer(p.id, 'b')}>
							<strong>{p.optionTwo.text}</strong>
						</button>
					</div>
				)}
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