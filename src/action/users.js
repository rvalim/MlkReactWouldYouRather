import * as data from '../utils/data'

export const GET_USERS = 'GET_USERS'
export const SET_USERS = 'SET_USERS'
export const SEL_OPTION = 'SEL_OPTION'

function _chooseOne(authedUser, qid, answer) {
    return {
        type: SEL_OPTION,
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

export function chooseOne(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser, questions } = getState()
        console.log('chooseOne', `#${qid}#`, questions[qid], answer, questions)
        const qOne = questions[qid].optionOne.text
        const qTwo = questions[qid].optionTwo.text
        const res = qOne === answer ? 'optionOne' : (qTwo === answer? 'optionTwo' : undefined)

        if (!res) throw new Error('Answer not in the list of options')

        return data._saveQuestionAnswer({ authedUser, qid, answer: res })
            .then(question => dispatch(_chooseOne(authedUser, qid, res )))
        //.then(() => dispatch(hideLoading()))
    }
}