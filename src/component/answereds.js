import React from 'react'
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

    listAllAnswers(list) {
        return list.map(item =>
            (
                <div style={principal} key={item.answer.id}>
                    <div style={first}>
                        <strong style={item.answer.option === 'A'? choosen : undefined}>
                            {item.question.optionA}
                        </strong>
                    </div>
                    <div style={second}>
                        <strong style={item.answer.option === 'B'? choosen : undefined}>
                            {item.question.optionB}
                        </strong>
                    </div>
                </div>
            )
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

export default AnswerList