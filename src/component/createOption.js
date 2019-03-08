import React from 'react'

class CreateOption extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.optionA.value, this.optionB.value, 'blablabla')
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