import {
    ADD_QUESTION,
    SET_QUESTIONS,
} from '../action/questions'

function questions(state = {}, action) {
    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                ...action.question
            }
        case SET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state
    }

}

export default questions