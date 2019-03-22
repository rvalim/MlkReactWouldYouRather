import { combineReducers } from 'redux'
import authedUser from '../reducer/authedUser'
import users from '../reducer/users'
import questions from './questions'

export default combineReducers({
    authedUser,
    users,
    questions,
})