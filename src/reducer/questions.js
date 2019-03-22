import {
    ADD_QUESTION,
    SET_QUESTIONS,
    GET_ALL_QUESTIONS,
} from '../action/questions'

function questions(state = {}, action) {
    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: {
                    ...action.question
                }
            }
        case SET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case GET_ALL_QUESTIONS:
            return state
        default:
            return state
    }

}

export default questions