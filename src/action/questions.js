import * as data from '../utils/data'

export const ADD_QUESTION = 'ADD_QUESTION'
export const DEL_QUESTION = 'DEL_QUESTION'
export const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS'

function _addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function addQuestion(question) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        question.author = authedUser
        //dispatch(showLoading())

        return data._saveQuestion(question)
            .then(question => dispatch(_addQuestion(question)))
        //.then(() => dispatch(hideLoading()))
    }
}

export function delQuestion(id) {
    return {
        type: DEL_QUESTION,
        id
    }
}

function _getAllQuestions() {
    return {
        type: GET_ALL_QUESTIONS
    }
}

export function getAllQuestions() {
    return (dispatch, getState) => {
        return data._getQuestions()
            .then(question => dispatch(_getAllQuestions(question)))
    }
}