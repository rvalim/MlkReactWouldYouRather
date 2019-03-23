import React from 'react'
import { connect } from 'react-redux'
import * as action from '../action/users'
import {formatPercentage} from '../utils/helper'
import Card from './card'

class question extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			showCard: false
		}
	}

	handleQuestion(qid, question) {
		const {dispatch, history} = this.props

		dispatch(action.answerQuestion(qid, question))
		//history.push(`/poll`)
		
		this.setState({showCard: true})
	}
	
	formatStatistics(question) {
        const nA = question.optionOne.votes.length
        const nB = question.optionTwo.votes.length
        const total = nA + nB

        return (
            <div>
                <h3>Would you rather...</h3>
                <h4>{question.optionOne.text}: {formatPercentage(nA, total)}</h4>
                <h3>OR</h3>
                <h4>{question.optionTwo.text}: {formatPercentage(nB, total)}</h4>
                <h4>total votes {total}</h4>
            </div>
        )
    }

	formatQuestion(question) {
		const { id } = question
		const optionOne = question.optionOne.text
		const optionTwo = question.optionTwo.text

		return (
			<div>
				<h3>Would you rather</h3>
				<button onClick={() => this.handleQuestion(id, optionOne)}>
					<strong>{optionOne}</strong>
				</button>
				<h4>OR</h4>
				<button onClick={() => this.handleQuestion(id, optionTwo)}>
					<strong>{optionTwo}</strong>
				</button>
			</div>
			)
	}

	render() {
		const { question } = this.props

		return (
			<Card qid={question.id}>
				{this.state.showCard? 
					this.formatStatistics(question):
					this.formatQuestion(question)}
			</Card>
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