import React, { Component } from 'react'
import { connect } from 'react-redux'

class Card extends Component {
    render() {
        const { user, title } = this.props
        
        return (
            <div>
                <h3>{user.name} - {title}</h3>
                <div>thumbnail</div>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps({ users, questions }, { uid, qid, title }) {
    const question = qid ? questions[qid] : null
    const user = question? users[question.author] : users[uid]

    return {
        user,
        title
    }
}

export default connect(mapStateToProps)(Card)