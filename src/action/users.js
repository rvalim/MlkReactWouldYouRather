import * as data from '../utils/_DATA'

export const GET_USERS = 'GET_USERS'
export const SET_USERS = 'SET_USERS'
export const ANS_QUESTION = 'ANS_QUESTION'

function _answerQuestion(authedUser, qid, answer) {
    return {
        type: ANS_QUESTION,
        authedUser, 
        qid,
        answer
    }
}

export function getUsers() {
    return {
        type: GET_USERS
    }
}

export function setUsers(users) {
    return {
        type: SET_USERS,
        users
    }
}

export function answerQuestion(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser, questions } = getState()
        const qOne = questions[qid].optionOne.text
        const qTwo = questions[qid].optionTwo.text
        const res = qOne === answer ? 'optionOne' : (qTwo === answer? 'optionTwo' : undefined)

        if (!res) throw new Error('Answer not in the list of options')

        return data._saveQuestionAnswer({ authedUser, qid, answer: res })
            .then(question => dispatch(_answerQuestion(authedUser, qid, res )))
        //.then(() => dispatch(hideLoading()))
    }
}