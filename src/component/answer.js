import React from 'react'

class Answer extends React.Component {

    constructor(props) {
        super(props)

        this.handleAnswer = this.handleAnswer.bind(this)
    }

    handleAnswer(option) {
        console.log(option)
    }

    render() {
        return (
            <div>
                <h3>Would you rather</h3>
                <button onClick={() => this.handleAnswer('a')}>
                   <strong>{this.props.question.optionA}</strong> 
                </button>
                <h4>OR</h4>
                <button onClick={() => this.handleAnswer('b')}>
                   <strong>{this.props.question.optionB}</strong> 
                </button>
            </div>
            )
        }
    }
    
export default Answer