import React from 'react'
import * as action from '../action/questions'
import store from '../store/store'
import {Card, Button} from 'react-bootstrap'

class questionAdd extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        let question = {
            optionOneText: this.questionA.value,
            optionTwoText: this.questionB.value
        }
        
        store.dispatch(action.addQuestion(question))
        this.props.history.push('/')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <Card className="text-center">
                    <Card.Header>Create new Poll</Card.Header>
                    <Card.Body>
                        <Card.Title>Would you rather...</Card.Title>
                        <input
                            type='text'
                            placeholder='Example: Work all day long'
                            ref={(input) => this.questionA = input} />

                        <h5>or</h5>
                        <input
                            type='text'
                            placeholder='Example: Going to the beach'
                            ref={(input) => this.questionB = input} />
                        <div></div>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button variant="primary" type="Submit">Save</Button>
                        <Button variant="danger" type="Reset">Cancel</Button>
                    </Card.Footer>
                </Card>
            </form>
        )
    }
}

export default questionAdd