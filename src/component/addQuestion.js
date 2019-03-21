import React from 'react'
import * as action from '../action/questions'
import store from '../store/store'

class Createquestion extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        let question = {
            optionOneText: this.questionA.value,
            optionTwoText: this.questionB.value
        }
        store.dispatch(action.addQuestion(question))
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit.bind(this)}>
                <h3>Create new question</h3>
                <h4>Would you rather</h4>
                <input
                    type='text'
                    placeholder='Example: Work all day long'
                    ref={(input) => this.questionA = input} />
                <h5>or</h5>
                <input
                    type='text'
                    placeholder='Example: Going to the beach'
                    ref={(input) => this.questionB = input} />
                <div>
                    <input type="submit" value="Save" />
                    <input type="reset" value="Cancel" />
                </div>
            </form>
        )
    }
}

export default Createquestion