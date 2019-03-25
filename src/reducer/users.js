import {
    GET_USERS,
    SET_USERS,
    ANS_QUESTION,
} from '../action/users'
import {ADD_QUESTION} from '../action/questions'

function users(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return state
        case SET_USERS:
            const { users } = action

            return {
                ...state,
                ...users
            }
        case ADD_QUESTION:
            const {'author': id, 'id': qid1} = action.question

            return {
                ...state,
                [id]: {
                    ...state[id],
                    questions: state[id].questions.concat(qid1)
                }
            }
        case ANS_QUESTION:
            const {authedUser, qid, answer} = action

            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            } 
        default:
            return state
    }

}

export default users