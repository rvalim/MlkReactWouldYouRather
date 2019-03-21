import React from 'react'
import * as actionAns from '../action/answer'
import {connect} from 'react-redux'

class Answer extends React.Component {

	constructor(props) {
		super(props)

		this.handleAnswer = this.handleAnswer.bind(this)
	}

	handleAnswer(questionId, option) {
		this.props.dispatch(actionAns.chooseOne(questionId, option))
	}

	render() {
		let questionsHtm = this.props.options.map(p =>
			<div>
				<h3>Would you rather</h3>
				<button onClick={() => this.handleAnswer(p.id, 'a')}>
					<strong>{p.optionA}</strong>
				</button>
				<h4>OR</h4>
				<button onClick={() => this.handleAnswer(p.id, 'b')}>
					<strong>{p.optionB}</strong>
				</button>
			</div>
		)
		return (
			<div>
				{questionsHtm}
			</div>
		)
	}
}

function mapStateToProps( {option} ) {
	return {
		options: option
	}
}

export default connect(mapStateToProps)(Answer)