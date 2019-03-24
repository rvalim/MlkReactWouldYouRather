import React from 'react'
import { connect } from 'react-redux'
import * as action from '../action/users'
import { formatStatisticsResult } from '../utils/helper'
import Card from './card'
import { Button, Alert } from 'react-bootstrap'

class question extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			showCard: false
		}
	}

	handleQuestion(qid, answer) {
		const { dispatch } = this.props

		dispatch(action.answerQuestion(qid, answer))
		//history.push(`/poll`)

		this.setState({ showCard: true, answer })
	}

	formatStatistics(question) {
		const nA = question.optionOne.votes.length
		const nB = question.optionTwo.votes.length
		const total = nA + nB

		return (
			<div>
				<Alert variant='primary'>
					<h3>{this.state.answer}</h3>
				</Alert>
				{formatStatisticsResult(question.optionOne.text, nA, total)}
				{formatStatisticsResult(question.optionTwo.text, nB, total)}
			</div>
		)
	}

	formatQuestion(question) {
		const { id } = question
		const optionOne = question.optionOne.text
		const optionTwo = question.optionTwo.text

		return (
			<div>
				<Button onClick={() => this.handleQuestion(id, optionOne)}>
					<strong>{optionOne}</strong>
				</Button>
				<h4>OR</h4>
				<Button onClick={() => this.handleQuestion(id, optionTwo)}>
					<strong>{optionTwo}</strong>
				</Button>
			</div>
		)
	}

	render() {
		const { question } = this.props

		return (
			<Card qid={question.id} title='Asked by'>
				{this.state.showCard ?
					this.formatStatistics(question) :
					this.formatQuestion(question)}
			</Card>
		)
	}
}

function mapStateToProps({ questions }, props) {
	const { id } = props.match.params

	return {
		question: questions[id]
	}
}

export default connect(mapStateToProps)(question)