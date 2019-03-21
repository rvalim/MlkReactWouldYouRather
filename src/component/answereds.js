import React from 'react'
import { connect } from 'react-redux'

const principal = {
    width: '100%'
}

const first = {
    width: '48%'
    , float: 'left'
    , border: '1px solid black'
}
const second = {
    width: '48%'
    , float: 'right'
    , border: '1px solid red'
}
const choosen = {
    color: 'red'
}

class AnswerList extends React.Component {
    constructor(props) {
        super(props)
    }

    getQuestion(id) {
        return this.props.options.find(p => p.id === id)
    }

    listAllAnswers() {
        let result = this.props.data.map(item => 
                (
                    <div style={principal} key={item.id}>
                        <div style={first}>
                            <strong style={item.option === 'a' ? choosen : undefined}>
                                {this.getQuestion(item.questionId).optionA}
                            </strong>
                        </div>
                        <div style={second}>
                            <strong style={item.option === 'b' ? choosen : undefined}>
                                {this.getQuestion(item.questionId).optionB}
                            </strong>
                        </div>
                    </div>
                )
        )

        return (
            <div>
                {result}
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

function mapStateToProps({ answer , option }){
    return {
        data: answer,
        options: option
    }
}

export default connect(mapStateToProps)(AnswerList)