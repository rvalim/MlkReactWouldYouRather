import * as data from '../utils/_DATA'

export const ADD_QUESTION = 'ADD_QUESTION'
export const SET_QUESTIONS = 'SET_QUESTIONS'

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


