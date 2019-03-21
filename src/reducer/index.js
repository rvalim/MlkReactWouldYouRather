import { combineReducers } from 'redux'
import authedUser from '../reducer/authedUser'
import users from '../reducer/users'
import answer from '../reducer/answer'
import questions from './questions'
import loading from '../reducer/loading'

export default combineReducers({
    authedUser,
    users,
    answer,
    questions,
    loading,
})