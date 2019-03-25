import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom";
import * as authAction from '../action/authedUser'

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            selectedUser: ''
        }
    }

    handleChange = e => this.setState({ selectedUser: e.target.value})

    handleLogin(){
        let {dispatch} = this.props
        dispatch(authAction.setAuthedUser(this.state.selectedUser))
    }
    
    renderOption = person => <option key={person.id} value={person.id}>{person.name}</option>
    
    render() {
        let {users, authedUser, location} = this.props
        let state = location.state? location.state : {from:"/"}
        
        return authedUser? <Redirect to={state.from} /> : 
            <div>
            <select onChange={this.handleChange.bind(this)} value={this.state.selectedUser}>
                <option value="">Selecione um usuario</option>
                {Object.keys(users).map(u => this.renderOption(users[u]))}
            </select>
            <button onClick={this.handleLogin.bind(this)}><span>>></span></button>
        </div>
    }

}

function mapStateToProps({users, authedUser}){
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Login)