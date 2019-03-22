import { getInitialData } from '../utils/api'
import { setUsers } from './users'
import { setQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(setUsers(users))
        dispatch(setQuestions(questions))
        //dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}
