import * as data from '../utils/data'

export const ADD_QUESTION = 'ADD_QUESTION'
export const SET_QUESTIONS = 'SET_QUESTIONS'
export const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS'

function _getAllQuestions() {
    return {
        type: GET_ALL_QUESTIONS
    }
}

function _addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function setQuestions(questions){
    return {
        type: SET_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        question.author = authedUser
        //dispatch(showLoading())

        return data._saveQuestion(question)
            .then(res => dispatch(_addQuestion(res)))
        //.then(() => dispatch(hideLoading()))
    }
}

export function getAllQuestions() {
    return (dispatch, getState) => {
        return data._getQuestions()
            .then(question => dispatch(_getAllQuestions(question)))
    }
}