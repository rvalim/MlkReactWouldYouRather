import {
    ADD_QUESTION,
    DEL_QUESTION, 
    GET_ALL_QUESTIONS,
} from '../action/questions'

const test = []

function questions(state = test, action) {
    switch (action.type) {
        case ADD_QUESTION:
            return state.concat([action.question])
        case DEL_QUESTION:
            return state.filter(p => p.id !== action.id)
        case GET_ALL_QUESTIONS:
            return state
    }

    return state
}

export default questions