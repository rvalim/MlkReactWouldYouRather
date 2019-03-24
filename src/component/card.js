import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Container, Row, Col } from 'react-bootstrap'

const avatar =  {
    height: '50px',
    borderRadius: '25px',
    margin: '10px',
  }

class CustomCard extends Component {
    render() {
        const { user, question, title } = this.props

        return (
            <Card>
                <Card.Header as="h5">{title} {user.name}</Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col sm={1}>
                                <img 
                                src={user.avatarURL}
                                style={avatar}
                                alt={user.name}></img>
                            </Col>
                            <Col sm={11}>
                                {question && <h3>Would you rather...</h3>}
                                {this.props.children}
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        )
    }
}

function mapStateToProps({ users, questions }, { uid, qid, title }) {
    const question = qid ? questions[qid] : null
    const user = question ? users[question.author] : users[uid]

    return {
        user,
        question,
        title
    }
}

export default connect(mapStateToProps)(CustomCard)