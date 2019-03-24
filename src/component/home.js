import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'react-bootstrap'
import QuestionPoll from './questionPoll'
import QuestionHistory from './questionHistory'

class Home extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="unanswereds" id="uncontrolled-tab-example">
                <Tab eventKey="unanswereds" title="Unanswereds">
                    <QuestionPoll history={this.props.history}  />
                </Tab>
                <Tab eventKey="answereds" title="Answereds">
                    <QuestionHistory history={this.props.history}  />
                </Tab>
            </Tabs>
        )
    }
}

export default connect()(Home)