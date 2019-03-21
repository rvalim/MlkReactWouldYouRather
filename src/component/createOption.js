import React from 'react'
import { ReactReduxContext } from 'react-redux'
import * as option from '../action/option'
import store from '../store/store'

class CreateOption extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let opt = {
            id: 1,
            optionA: this.optionA.value,
            optionB: this.optionB.value
        }
        store.dispatch(option.addOptionAction(opt))
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}>
                <h3>Create new Option</h3>
                <h4>Would you rather</h4>
                <input
                    type='text'
                    placeholder='Example: Work all day long'
                    ref={(input) => this.optionA = input} />
                <h5>or</h5>
                <input
                    type='text'
                    placeholder='Example: Going to the beach'
                    ref={(input) => this.optionB = input} />
                <div>
                    <input type="submit" value="Save" />
                    <input type="reset" value="Cancel" />
                </div>
            </form>
        )
    }
}

export default CreateOption